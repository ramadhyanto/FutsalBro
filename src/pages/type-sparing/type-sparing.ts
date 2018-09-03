import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TypeSparingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-type-sparing',
  templateUrl: 'type-sparing.html',
})
export class TypeSparingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypeSparingPage');
  }

  listSparing (params) {
    console.log(params);
    this.navCtrl.push("ListSparingPage",{ params: params});
  }

}
