import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { BookingServiceProvider } from '../../providers/booking-service/booking-service';
import * as moment from 'moment';
import { PropertiesProvider } from '../../providers/properties/properties';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  location: any;
  startTime: string;
  dateplay: string;
  timeplay: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public book: BookingServiceProvider, public properties: PropertiesProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  }

  ionViewWillEnter() {
    this.location = this.navParams.get('loc');
  }

  openModal() {
    this.navCtrl.push("ModalPage", {
      paramPage: 2, title: "Pilih Lokasi"
    });
  }

  convertToNumber(event: number) {
    return +event;
  }

  getStadium() {
    this.startTime = this.properties.getDate(this.dateplay);
    // ADDING HOUR WITH DURATION
    var timeTemp = moment(this.startTime);
    timeTemp.add(this.timeplay, 'H');
    var endTime = timeTemp.format('YYYY-MM-DD HH:mm:ss');
    // ADDING HOUR WITH DURATION
    this.navCtrl.push("ListStadiumPage", { page: 1, max: 10, searchValue: this.location, startTime: this.startTime, endTime: endTime, duration: this.timeplay });
  }

}
