import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PropertiesProvider } from '../../providers/properties/properties';
import { DetailBookingServiceProvider } from '../../providers/detail-booking-service/detail-booking-service';
import { MainPage } from '..';


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
  bookingData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public properties: PropertiesProvider,public detailBooking: DetailBookingServiceProvider) {
    this.bookingData = this.navParams.get("params");
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
    loader.dismiss();
  }

  uploadPayment(){
    this.bookingData.status = "PAID";
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    console.log(this.bookingData);
    loader.present();
    this.detailBooking.uploadPayment(this.bookingData).then((resp) => {
      console.log(resp);
      loader.dismiss();
      this.navCtrl.setRoot(MainPage, {}, {
        animate: true,
        direction: 'forward'
      });
    }, (err) => {
      loader.dismiss();
      // Unable to log in
      // this.properties.showDialogError(this.messages.messages.NOT_FOUND);
    });
  }

}
