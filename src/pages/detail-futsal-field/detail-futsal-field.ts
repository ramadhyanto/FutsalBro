import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DetailFutsalFieldServiceProvider } from '../../providers/detail-futsal-field-service/detail-futsal-field-service';
import { PropertiesProvider } from '../../providers/properties/properties';

/**
 * Generated class for the DetailFutsalFieldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-futsal-field',
  templateUrl: 'detail-futsal-field.html',
})
export class DetailFutsalFieldPage {
  id: number = 0;
  data: any;
  detailData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public detailfield: DetailFutsalFieldServiceProvider, public properties: PropertiesProvider) {
    this.id = this.navParams.get('id');
    this.detailData = {
      "id": this.id,
      "name": "",
      "type": "",
      "startTime": "",
      "endTime": "",
      "price": 0,
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailFutsalFieldPage');
    this.data = {
      id: this.id
    }
    this.LoadData();
  }

  LoadData() {
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    console.log(this.data);
    this.detailfield.getField(this.data).then((resp) => {
      console.log(resp);
      this.detailData.name = resp["data"]["name"];
      this.detailData.type = resp["data"]["type"];
      this.detailData.price = resp["data"]["price"];
      this.detailData.startTime = resp["data"]["startTime"];
      this.detailData.endTime = resp["data"]["endTime"];
      loader.dismiss();
    }, (err) => {
      loader.dismiss();
    });
  }

  editField() {
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    console.log(this.detailData);
    this.detailfield.editField(this.detailData).then((resp) => {
      console.log(resp);
      loader.dismiss();
      this.navCtrl.pop();
    }, (err) => {
      loader.dismiss();
      // Unable to log in
      this.properties.showDialogError();
    });
  }

  convertToNumber(event): number { return +event; }
}
