import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ListBookingFieldServiceProvider } from '../../providers/list-booking-field-service/list-booking-field-service';
import { PropertiesProvider } from '../../providers/properties/properties';
/**
 * Generated class for the ListBookingFieldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-booking-field',
  templateUrl: 'list-booking-field.html',
})

export class ListBookingFieldPage {
  data: any;
  page: number;
  max: number;
  searchValue: string;
  bookingList: any;
  stadionId:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingController:LoadingController,public listBookingFieldService:ListBookingFieldServiceProvider, public properties:PropertiesProvider) {
    this.stadionId = this.navParams.get('stadionId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListBookingFieldPage');
    this.LoadDataBooking(); 
  }

  ionViewWillEnter() {
    this.LoadDataBooking(); 
  }

  LoadDataBooking() {
   
    this.data = {
      stadionId: this.properties.stadionId
    };

    let loader = this.loadingController.create({
      content: "Harap Tunggu"
    });

    loader.present();

    console.log(this.data);

    this.listBookingFieldService.getBookingByStadion(this.data).then((resp) => {
      this.bookingList = resp["data"];
      console.log(resp);
      loader.dismiss();
    }, (err) => {
       loader.dismiss();
    });
  }

  detailBooking(bookingData){
    console.log(bookingData);
    this.navCtrl.push("DetailBookingFieldPage",{booking: bookingData});
  }
}
