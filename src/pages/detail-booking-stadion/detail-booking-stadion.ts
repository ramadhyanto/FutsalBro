import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { PropertiesProvider } from '../../providers/properties/properties';
import { DetailBookingStadionServiceProvider } from '../../providers/detail-booking-stadion-service/detail-booking-stadion-service';

/**
 * Generated class for the DetailBookingStadionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-booking-stadion',
  templateUrl: 'detail-booking-stadion.html',
})
export class DetailBookingStadionPage {
  booking : any;
  data:any;
  dataTeam = { teamName: "", email: "" };
  constructor(public navCtrl: NavController, public navParams: NavParams , public toastCtrl: ToastController, public loadingCtrl: LoadingController,public detailBookingStadionService: DetailBookingStadionServiceProvider, public properties:PropertiesProvider) {
    this.booking = navParams.get("params"); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailBookingFieldPage');
    this.data = {
      teamId: this.booking.teamId
    };
    this.getTeamData();
  }

  getTeamData() {
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    this.detailBookingStadionService.getTeam(this.data).then((resp) => {
      console.log(resp);
      this.dataTeam.teamName = resp["data"]["teamName"];
      loader.dismiss();
      this.dataTeam=resp["data"];
    }, (err) => {
      loader.dismiss();
    });
  }

  updateStatusBooking(status){
    this.booking.startTime =this.properties.getDate(this.booking.startTime);
    this.booking.endTime = this.properties.getDate(this.booking.endTime);
    this.booking.status = status;
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    this.detailBookingStadionService.updateBookingField(this.booking).subscribe((resp) => {
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
