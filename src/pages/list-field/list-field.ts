import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PropertiesProvider } from '../../providers/properties/properties';
import { ListFieldServiceProvider } from '../../providers/list-field-service/list-field-service';

/**
 * Generated class for the ListFieldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-field',
  templateUrl: 'list-field.html',
})
export class ListFieldPage {
  data: any;
  page: number;
  max: number;
  searchValue: string;
  stadiumList: any;
  startTime: string;
  endTime: string;
  fieldList: any;
  stadionId: number;
  duration: number;
  price: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public listfield: ListFieldServiceProvider, public properties: PropertiesProvider) {
    this.page = this.navParams.get('page');
    this.max = this.navParams.get('max');
    this.searchValue = this.navParams.get('searchValue');
    this.startTime = this.navParams.get('startTime');
    this.endTime = this.navParams.get('endTime');
    this.stadionId = this.navParams.get('stadionId');
    this.duration = this.navParams.get('duration');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListStadiumPage');
      this.data = {
        page: this.page,
        max: this.max,
        searchValue: this.searchValue,
        startTime: this.startTime,
        endTime: this.endTime,
        stadionId: this.stadionId
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
    this.listfield.getField(this.data).then((resp) => {
      this.fieldList = resp["data"];
      console.log(resp);
      loader.dismiss();
    }, (err) => {
      loader.dismiss();
    });
  }

  getField(id,price) {
    console.log(id);
    this.navCtrl.push("DetailFieldPage", { fieldId: id,  startTime: this.startTime, endTime: this.endTime, stadionId: this.stadionId, duration: this.duration, price: price });
  }

}
