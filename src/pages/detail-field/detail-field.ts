import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PropertiesProvider } from '../../providers/properties/properties';
import { MainPage } from '../';
import { DetailFieldServiceProvider } from '../../providers/detail-field-service/detail-field-service';
/**
 * Generated class for the DetailFieldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-field',
  templateUrl: 'detail-field.html',
})
export class DetailFieldPage {
  fieldId: number;
  data: any;
  dataimage: any;
  databooking: any;
  listImage: any;
  duration: number;
  startTime: string;
  endTime: string;
  stadionId: number;
  price: number;
  totalPayment: number;
  fieldData = { name: "", type: "", price: 0 };

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public detailfield: DetailFieldServiceProvider, public properties: PropertiesProvider) {
    this.fieldId = this.navParams.get('fieldId');
    this.duration = this.navParams.get('duration');
    this.startTime = this.navParams.get('startTime');
    this.endTime = this.navParams.get('endTime');
    this.stadionId = this.navParams.get('stadionId');
    this.price = this.navParams.get('price');
    this.totalPayment = (this.duration * this.price);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailFieldPage');
    this.data = {
      id: this.fieldId
    };
    this.dataimage = {
      futsalFieldId: this.fieldId
    };
    this.databooking = {
      startTime: this.startTime,
      endTime: this.endTime,
      status: "BOOKED",
      teamId: this.properties.teamId,
      stadionId: this.stadionId,
      versusTeamId: 0,
      futsalFieldId: this.fieldId,
      duration: this.duration,
      bookingFee: this.totalPayment
    };
    console.log(this.databooking);
    this.LoadData();
  }

  LoadData() {
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    console.log(this.data);
    this.detailfield.getImageField(this.dataimage).then((resp) => {
      console.log(resp);
      this.listImage = resp["data"];

    }, (err) => {
      loader.dismiss();
    });
    this.detailfield.getField(this.data).then((resp) => {
      console.log(resp);
      this.fieldData.name = resp["data"]["name"];
      this.fieldData.type = resp["data"]["type"];
      this.fieldData.price = this.totalPayment;
      loader.dismiss();
    }, (err) => {
      loader.dismiss();
    });
  }

  Book() {
    console.log("juuhh");
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    console.log(this.databooking);
    this.detailfield.bookField(this.databooking).then((resp) => {

      console.log(resp);
      loader.dismiss();
      this.navCtrl.setRoot(MainPage, {}, {
        animate: true,
        direction: 'forward'
      });
    }, (err) => {
      loader.dismiss();
      // Unable to log in
      this.properties.showDialogError();
    });
  }


}
