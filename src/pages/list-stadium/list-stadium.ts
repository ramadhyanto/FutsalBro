import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ListstadiumServiceProvider } from '../../providers/liststadium-service/liststadium-service';

/**
 * Generated class for the ListStadiumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-stadium',
  templateUrl: 'list-stadium.html',
})
export class ListStadiumPage {
  page: number;
  max: number;
  searchValue: string;
  stadiumList: any;
  data: any;
  startTime: string;
  endTime: string;
  duration: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public liststadium: ListstadiumServiceProvider) {
    this.page =  this.navParams.get('page');
    this.max =  this.navParams.get('max');
    this.searchValue =  this.navParams.get('searchValue');
    this.startTime =  this.navParams.get('startTime');
    this.endTime =  this.navParams.get('endTime');
    this.duration = this.navParams.get('duration');
    console.log(this.duration);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListStadiumPage');
    this.data = {
      page: this.page,
      max: this.max,
      searchValue: this.searchValue
    };
    this.LoadData();
  }

  ionViewWillEnter() {

  }

  LoadData() {
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    console.log(this.data);
    this.liststadium.getStadium(this.data).then((resp) => {
      this.stadiumList = resp["data"];
      console.log(this.stadiumList);
      loader.dismiss();
    }, (err) => {
      loader.dismiss();
    });
  }

  getField(id) {
    this.navCtrl.push("ListFieldPage", { page: 1, max: 10, searchValue: this.searchValue, startTime: this.startTime, endTime: this.endTime, stadionId: id, duration: this.duration });
  }

}
