import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PropertiesProvider } from '../../providers/properties/properties';
import { ListFutsalFieldServiceProvider } from '../../providers/list-futsal-field-service/list-futsal-field-service';

/**
 * Generated class for the ListFutsalFieldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-futsal-field',
  templateUrl: 'list-futsal-field.html',
})
export class ListFutsalFieldPage {
  data: any;
  fieldList: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public properties: PropertiesProvider, public loadingCtrl: LoadingController, public listfield: ListFutsalFieldServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListFutsalFieldPage');

  }

  ionViewWillEnter() {
    this.data = {
      stadionId: this.properties.stadionId
    }
    this.LoadData();
  }

  LoadData() {
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    console.log(this.data);
    this.listfield.getStadion(this.data).then((resp) => {
      this.fieldList = resp["data"];
      console.log(resp);
      loader.dismiss();
    }, (err) => {
      loader.dismiss();
    });
  }

  deleteField(id) {
    console.log(id);
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    this.listfield.deleteField({ id: id }).then((resp) => {
      console.log(resp);
      loader.dismiss();
      this.LoadData();
    }, (err) => {
      loader.dismiss();
    });
  }

  detailField(id) {
    this.navCtrl.push("DetailFutsalFieldPage", { id: id });

  }

}
