import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { BookingServiceProvider } from '../../providers/booking-service/booking-service';
import * as moment from 'moment';

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
  startTime2: string;
  timeplay: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public datepipe: DatePipe, public loadingCtrl: LoadingController, public book: BookingServiceProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');

  }

  ionViewWillEnter() {
    this.location = this.navParams.get('loc');
  }

  openModal() {
    this.navCtrl.push("ModalPage", { paramPage: 2, title: "Pilih Lokasi" });
  }

  getStadium() {
    var dateplay = moment(this.startTime);
    dateplay.set({minute:0,second:0})
    this.startTime = dateplay.format('YYYY-MM-DD HH:mm:ss');
    var time = moment(this.startTime);
    time.add(this.timeplay, 'H');
    var endTime = time.format('YYYY-MM-DD HH:mm:ss');
    console.log(this.timeplay);
    this.navCtrl.push("ListStadiumPage", { page: 1, max: 10, searchValue: this.location, startTime: this.startTime, endTime: endTime, duration: this.timeplay });
  }

}
