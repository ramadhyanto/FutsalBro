import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PropertiesProvider } from '../../providers/properties/properties';
import { ListBookingTeamServiceProvider } from '../../providers/list-booking-team-service/list-booking-team-service';
import { MessagesProvider } from '../../providers/messages/messages';


/**
 * Generated class for the ListBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-booking-team',
  templateUrl: 'list-booking-team.html',
})
export class ListBookingTeamPage {
  data: any;
  bookingList = [];
  booking: string = "booked";
  message: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public properties: PropertiesProvider, public loadingCtrl: LoadingController, public listBooking: ListBookingTeamServiceProvider, public messages: MessagesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListBookingPage');
    this.data = {
      teamId: this.properties.teamId
    };
    this.LoadData("BOOKED");
  }

  ionViewWillEnter() {
    // this.data = {
    //   teamId: this.properties.teamId
    // };
    // this.LoadData();
  }

  LoadData(status) {
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    this.listBooking.getListBooking(this.data).then((resp) => {
      console.log(resp["data"]);
      if (resp["data"]["length"] > 0) {
        this.bookingList = resp["data"];
        this.bookingList = this.bookingList.filter(items =>
          items.status == status
        );
        for (var awal = 0; awal < this.bookingList.length; awal++) {
          this.bookingList[awal].startTime = this.properties.getDate(this.bookingList[awal].startTime);
          this.bookingList[awal].endTime = this.properties.getDate(this.bookingList[awal].endTime);
        }
        console.log("sukses");
        loader.dismiss();
      } else {
        this.properties.showDialogError(this.messages.messages.NOT_FOUND);
      }

    }, (err) => {
      loader.dismiss();
    });
  }

  detailBooking(objectData) {
    this.navCtrl.push("DetailBookingTeamPage", { params: objectData });
  }

}
