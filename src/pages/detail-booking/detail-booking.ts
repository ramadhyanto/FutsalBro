import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PropertiesProvider } from '../../providers/properties/properties';


/**
 * Generated class for the DetailBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-booking',
  templateUrl: 'detail-booking.html',
})
export class DetailBookingPage {
  bookingData = { bookingCode: "", status: "", bookingFee: "", duration: 0, stadionId: 0, startTime: "", endTime: "", teamId: 0 };
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public properties: PropertiesProvider) {
    console.log(this.navParams.get("params"));
    this.data = this.navParams.get("params");
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailBookingPage');
    this.LoadData();
  }

  ionViewWillEnter() {
    this.LoadData();
  }

  LoadData() {
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    this.bookingData.bookingCode = this.data.bookingCode;
    this.bookingData.status = this.navParams.get("status");
    this.bookingData.bookingFee = this.properties.getCurrency(this.navParams.get('bookingFee'));
    this.bookingData.duration = this.navParams.get('duration');
    this.bookingData.stadionId = this.navParams.get('stadionId');
    this.bookingData.startTime = this.navParams.get('startTime');
    this.bookingData.endTime = this.navParams.get('endTime');
    this.bookingData.teamId = this.navParams.get('teamId');
    loader.dismiss();
  }

}
