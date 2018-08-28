import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { DetailBookingFieldServiceProvider } from '../../providers/detail-booking-field-service/detail-booking-field-service';
import { PropertiesProvider } from '../../providers/properties/properties';

/**
 * Generated class for the DetailBookingFieldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-booking-field',
  templateUrl: 'detail-booking-field.html',
})
export class DetailBookingFieldPage {

  booking : any;
  constructor(public navCtrl: NavController, public navParams: NavParams , public toastCtrl: ToastController, public loadingCtrl: LoadingController,public detailBookingProviderService:DetailBookingFieldServiceProvider, public properties:PropertiesProvider) {
    this.booking = navParams.get("booking"); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailBookingFieldPage');
  }

  updateStatusBooking(status){
    this.booking.startTime = "2018-07-23 17:00:00";
    this.booking.endTime = "2018-07-23 18:00:00";
    this.booking.status = status;
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    // Attempt to login in through our User service
    this.detailBookingProviderService.updateBookingField(this.booking).subscribe((resp) => {
      if (resp["isSuccessFull"]) {
        loader.dismiss();
        let toast = this.toastCtrl.create({
          message: "Sukses Update Status Booking !",
          duration: 3000,
          position: 'middle'
        });
        toast.present();
        // this.navCtrl.setRoot('LoginPage', {}, {
        //   animate: true,
        //   direction: 'forward'
        // });
      }
      else {
        loader.dismiss();
        let errors = resp["errors"].map(e=>e.message).join("/n");
        let toast = this.toastCtrl.create({
          message: errors,
          duration: 3000,
          position: 'middle'
        });
        toast.present();
      }

    }, (err) => {
      loader.dismiss();
      let toast = this.toastCtrl.create({
        message: "Gagal Update Booking Field! Coba Lagi !",
        duration: 3000,
        position: 'middle'
      });
      toast.present();
    });
  }

  
}
