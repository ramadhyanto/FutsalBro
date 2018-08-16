import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';
import { PropertiesProvider } from '../../providers/properties/properties';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  data: { userId: number } = {
    userId: this.properties.userId
  };
  teamName: string;
  address: string;
  contactNo: string;
  email: string;
  facebook: string;
  idCard: string;
  base64Image: string;
  instagram: string;
  twitter: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public profile: ProfileServiceProvider, public properties: PropertiesProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.LoadData();
  }

  LoadData() {
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    this.profile.getProfile(this.data).subscribe((resp) => {
      this.teamName = resp["data"]["teamName"];
      this.address = resp["data"]["address"];
      this.contactNo = resp["data"]["contactNo"];
      this.email = resp["data"]["email"];
      this.facebook = resp["data"]["facebook"];
      this.idCard = resp["data"]["idCard"];
      this.instagram = resp["data"]["instagram"];
      this.twitter = resp["data"]["twitter"];
      this.base64Image = "data:image/jpg;base64," + resp["data"]["base64Image"];
      loader.dismiss();
    }, (err) => {
      loader.dismiss();
      // Unable to log in
      this.properties.showDialogError();
    });
  }

}
