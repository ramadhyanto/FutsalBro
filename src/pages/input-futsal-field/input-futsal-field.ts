import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { InputFutsalFieldServiceProvider } from '../../providers/input-futsal-field-service/input-futsal-field-service';
import { PropertiesProvider } from '../../providers/properties/properties';

/**
 * Generated class for the InputFutsalFieldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input-futsal-field',
  templateUrl: 'input-futsal-field.html',
})
export class InputFutsalFieldPage {
  price: number;
  data: { stadionId: number, name: string, type: string, startTime: string, endTime: string, price: number } = {
    stadionId: this.properties.stadionId,
    name: '',
    type: '',
    startTime: '',
    endTime: '',
    price: 0
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public inputField: InputFutsalFieldServiceProvider, public properties: PropertiesProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputFutsalFieldPage');
  }

  postField() {
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    console.log(this.data);
    this.inputField.inputField(this.data).then((resp) => {
      console.log(resp);
      loader.dismiss();
      let toast = this.toastCtrl.create({
        message: "Berhasil Input Data !",
        duration: 1000,
        position: 'middle'
      });
      toast.present();
    }, (err) => {
      loader.dismiss();
      // Unable to log in
      this.properties.showDialogError();
    });
  }

  convertToNumber(event): number { return +event; }

}
