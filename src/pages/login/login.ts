import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, LoadingController } from 'ionic-angular';
import { MainPage } from '../';
import { PropertiesProvider } from '../../providers/properties/properties';
import { LoginServiceProvider } from '../../providers/login-service/login-service';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { username: string, password: string } = {
    username: 'ramadhyanto',
    password: 'rama'
  };

  // Our translated text strings
  // private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public login: LoginServiceProvider,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public loadingCtrl: LoadingController,
    public properties: PropertiesProvider) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      // this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    this.login.login(this.account).subscribe((resp) => {
      loader.dismiss();
      let toast = this.toastCtrl.create({
        message: "Sukses Login !",
        duration: 3000,
        position: 'middle'
      });
      toast.present();
      this.navCtrl.push(MainPage);
    }, (err) => {
      loader.dismiss();
      // Unable to log in
      this.properties.showDialogError();
    });
  }

  signUpPage() {
    this.navCtrl.setRoot('SignupPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }
}
