import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PropertiesProvider } from '../../providers/properties/properties';
import { MessagesProvider } from '../../providers/messages/messages';
import { ListBookingStadionServiceProvider } from '../../providers/list-booking-stadion-service/list-booking-stadion-service';

/**
 * Generated class for the ListBookingStadionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-booking-stadion',
  templateUrl: 'list-booking-stadion.html',
})
export class ListBookingStadionPage {
  data: any;
  bookingList = [];
  booking: string = "booked";
  message: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public properties: PropertiesProvider, public loadingCtrl: LoadingController, public listBookingStadion: ListBookingStadionServiceProvider, public messages: MessagesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListBookingStadionPage');
    this.data = {
      stadionId: this.properties.stadionId
    };
    this.LoadData("BOOKED");
  }

  LoadData(status) {
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    this.listBookingStadion.getListBookingStadion(this.data).then((resp) => {
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

  detailBookingStadion(objectData) {
    this.navCtrl.push("DetailBookingStadionPage", { params: objectData });
  }
}
