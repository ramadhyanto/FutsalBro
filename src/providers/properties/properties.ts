import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { CurrencyPipe } from '@angular/common';
import * as moment from 'moment';

/*
  Generated class for the PropertiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PropertiesProvider {
  token: string = null;
  userId: number = null;
  id: number = null;
  teamId: number = null;
  stadionId: number = null;
  userType: string = "";

  constructor(public http: HttpClient, public alertCtrl: AlertController, private currencyPipe: CurrencyPipe) {
    console.log('Hello PropertiesProvider Provider');
  
  }

  showDialogError(message) {
    let alert = this.alertCtrl.create({
      title: 'Attention',
      message: message,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }

  getCurrency(amount: number) {
    return this.currencyPipe.transform(amount, "Rp. ");
  }

  getDate(date: string) {
    console.log(date);
    let dateTemp = date.substring(0, 19);
    let dateConverted = moment(dateTemp).format('YYYY-MM-DD HH:mm:ss');
    return dateConverted;
  }


}
