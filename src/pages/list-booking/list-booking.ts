import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PropertiesProvider } from '../../providers/properties/properties';
import { ListBookingServiceProvider } from '../../providers/list-booking-service/list-booking-service';


/**
 * Generated class for the ListBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-booking',
  templateUrl: 'list-booking.html',
})
export class ListBookingPage {
  data: any;
  bookingList = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public properties: PropertiesProvider, public loadingCtrl: LoadingController, public listBooking: ListBookingServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListBookingPage');
    this.data = {
      teamId: this.properties.teamId
    };
    this.LoadData();
  }

  ionViewWillEnter() {
    this.data = {
      teamId: this.properties.teamId
    };
    this.LoadData();
  }

  LoadData() {
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    console.log(this.data);
    this.listBooking.getListBooking(this.data).then((resp) => {
      this.bookingList = resp["data"];
      for (var awal = 0; awal < this.bookingList.length; awal++) {
        this.bookingList[awal].startTimeConverted = this.properties.getDate(this.bookingList[awal].startTime);
        this.bookingList[awal].endTimeConverted = this.properties.getDate(this.bookingList[awal].endTime);
      }
      console.log(resp);
      loader.dismiss();
    }, (err) => {
      loader.dismiss();
    });
  }

  detailBooking(objectData) {
    this.navCtrl.push("DetailBookingPage", {params: objectData});
  }

  getFilteredList(status){
    return this.bookingList = this.bookingList.filter(items=>
          items.status == status
     );
  }

}
