import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ListSparingServiceProvider } from '../../providers/list-sparing-service/list-sparing-service';
import moment from 'moment';
import { PropertiesProvider } from '../../providers/properties/properties';
import { MessagesProvider } from '../../providers/messages/messages';

/**
 * Generated class for the ListSparingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-sparing',
  templateUrl: 'list-sparing.html',
})
export class ListSparingPage {
  data: any;
  sparingList: any;
  isBattle: string;
  sparing: string = "today";
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public listsparing: ListSparingServiceProvider, public properties: PropertiesProvider, public messages: MessagesProvider) {
    this.isBattle = this.navParams.get("params");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListStadiumPage');
    this.LoadData("TODAY");
  }

  ionViewWillEnter() {
  }

  LoadData(params) {
    console.log(params);
    console.log(this.isBattle);
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    let constdate = moment();
    // GETTING ONE WEEK BEFORE
    constdate = moment().add(-7, 'days');
    let convertedDate = constdate.format('YYYY-MM-DD');
    // GETTING ONE WEEK BEFORE

    if (params == "TODAY") {
      if (this.isBattle == "Double") {
        this.data = {
          isBattle: true,
          startTime: moment().format('YYYY-MM-DD 00:00:00'),
          endTime: moment().format('YYYY-MM-DD HH:mm:ss')
        };
      } else{
        this.data = {
          isBattle: false,
          startTime: moment().format('YYYY-MM-DD 00:00:00'),
          endTime: moment().format('YYYY-MM-DD HH:mm:ss')
        };
      }
    } else{
      if (this.isBattle == "Double") {
        this.data = {
          isBattle: true,
          startTime: convertedDate + " 00:00:00",
          endTime: moment().format('YYYY-MM-DD HH:mm:ss')
        };
      } else{
        this.data = {
          isBattle: false,
          startTime: convertedDate + " 00:00:00",
          endTime: moment().format('YYYY-MM-DD HH:mm:ss')
        };
      }
    }
    console.log(this.data);

    this.listsparing.getListSparing(this.data).then((resp) => {
      if (resp["data"]["length"] > 0) {
        this.sparingList = resp["data"];
      } else {
        this.properties.showDialogError(this.messages.messages.NOT_FOUND);
      }
      console.log(resp);
      loader.dismiss();
    }, (err) => {
      loader.dismiss();
    });
  }



}
