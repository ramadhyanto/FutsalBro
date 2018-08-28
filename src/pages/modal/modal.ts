import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ModalServiceProvider } from '../../providers/modal-service/modal-service';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  locationList: any;
  title: string;

  // dataSearchCode: { searchCode: number } = {
  //   searchCode: 2
  // };

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalServiceProvider, public loadingCtrl: LoadingController) {
    this.title =  this.navParams.get('title');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    this.LoadData()
  }

  LoadData() {
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    this.modal.getLocation({ searchCode: this.navParams.get('paramPage') }).then((resp) => {
      console.log(resp);
      this.locationList = resp["data"];
      loader.dismiss();
    }, (err) => {
      loader.dismiss();
    });
  }

  selectLoc(event, loc) {
    this.navCtrl.getPrevious().data.loc = loc;
    this.navCtrl.pop();
  }

}
