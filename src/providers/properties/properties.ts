import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the PropertiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PropertiesProvider {
  token: string = null;

  constructor(public http: HttpClient,public alertCtrl: AlertController) {
    console.log('Hello PropertiesProvider Provider');
  }

  showDialogError() {
    let alert = this.alertCtrl.create({
      title: 'Attention',
      message: 'Maaf Server sedang bermasalah coba untuk beberapa saat lagi ya',
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

}
