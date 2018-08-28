import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, LoadingController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupServiceProvider } from '../../providers/signup-service/signup-service';
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})


export class SignupPage {
  password: string;
  repassword: string;
  signupform: FormGroup;
  signUpSegment="team";
  provinces: Provinces[];
  province : Provinces;
  accountTeam = {
    "userType": "",
    "roleUser": "ROLE_USER",
    "username": "",
    "password": "",
    "idCard": "",
    "imageProfile": "nopict.png",
    "address": "",
    "email": "",
    "facebook": "",
    "instagram": "",
    "twitter": "",
    "teamName": "",
    "countTeam": 9,
    "contactNo": "",
    "isReadyToMatch": true,
    "base64Image": "iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAIAAAC1eHXNAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAA75JREFUWEftmEto1EAYgDNpst3ddndb7cNWBEUPngRP6kEE8QFCBb0K3jx5UA96UVDw6kUQRaW+8S0+UbAUoZVWPNSDB9GDh1pQXK2tu5tsMpOJfzK/td3ubiaJL8SPhZ3/T5N8+0/mz1Diuq7yF6Di95/mX/GwzXs4ikdcD3NiH2ejGMQgrgc1X9vGZQxiEMvDNu4RolilsxjHIKbHeaIqzHqjxF78sTyoeV8h3sAyev1EdKJ7MOsZZxTmBT528QJmoxLdwyqdgknxAA9zMObERPSAu1LzkZgUqAdAjdveV1QienD62qEfMPBVLOMcBpGI6GGXeqEYohIeRGHxGmtUD/PuDwm/HtxRqDWIcXiieDhs1OsZM/GmpnACg/BE8aDGrRmTIoCpsR7jODy4D3LdciG/kZUHiJryLlmPBoUX4JwKD9FRiZr2T6+7il3TVdxM2109tRkzUx4CY2Kv+eWI1xXqm8ySEMg0d5crDXpXtnNI1RZiyqdyX0jL/YX8eoW72KN+HnAfkGjMbGueewlT06iyP+XO5+KnDdQcAZWqvzsCYAA0tZ1vbNruJyqpuU82JnabE0dFVeLYiDI06O3ZjmFVX4zZWdT0AKj5oJDvgePgEUHFuzCcq2rJ7KFUbj9ma1DPA+DOe2rcKH7eFbYwogxaclmmY0BVc5itTYCHgFkjhfwa1ylWaRvVEBKp3M506zFMBSHlISh8XENNaDAY1gKuR4jaNPdOIt2DKQlCrE6tcTWOgiAko6c2YSBHCA+rcCywvwHwJw6bpOWHGMsh68HoS+5MYlAf3CmexlAOWQ9augnPkex6IbAH6MOxHLIedun4bAl4JGHbIXplBZyVWbkfAwmkPDgbc9gnDL4DtweP7Lw+PbXKs5m27MAYPpYRYhMv5WGb16ffRpShIbFozoKvenJdpmMo3XrQnaniTU3pGo4lkPKwiien3nlwM6hEMrsj1/WWqBn/OLSsQ7nuYUI0USQB5xazn2MQhISHy6Z2geJRyHTcappzyk/8QGtc2TJ/UkuuFCogDT62cQUPBxHsYZcuigHMhZZY2tI9lkhvFZkKYDOW7RxOtR7wauarWMUzeCyIAA9mv7CMi96P8+ci2/VK1ebjsRqkc4eznf1ETXo27KtDK3fUVQnwsI2z1HwCg+b2q7PnohZ6cm1L93s9uYJzuILcf0fgPVeH8XfN42NtDhvDOCSlL3vGR1MY1KXe+5Y7eWY91dNbJLtoVWzjhqot0RLLMa5BiPf+L0Wqf/wG/nvM5O/wUJRvnx0MNrp9hO0AAAAASUVORK5CYII="
  };

  accountStadion={
    "userType": "",
    "roleUser": "ROLE_USER",
    "username": "",
    "stadionName":"",
    "idCard": "",
    "province":"",
    "disctricts":"",
    "subDistrics":"",
    "kelurahan":"",
    "zipCode":"",
    "address":"",
    "contactNo":"",
    "guard":"",
    "email":"",
    "countfutsalField":"",
    "facebook":"",
    "instagram":"",
    "twitter":"",
    "facilities":"",
    "base64Image":""


  };
  validatePassword: { repassword: string } = { "repassword": "" };
  
  // Our translated text strings
  // private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public signup: SignupServiceProvider,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public loadingCtrl: LoadingController) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      // this.signupErrorString = value;
    })
    this.provinces = [
      { id: 1, name: 'Jawa Barat' },
      { id: 2, name: 'DKI Jakarta' },
      { id: 3, name: 'Jawa Timur' },
      { id: 4, name: 'Jawa Tengah' },
    ];
      
    let emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.signupform = new FormGroup({
      idCard: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9]*"), Validators.minLength(5), Validators.maxLength(20)]),
      username: new FormControl('', [Validators.required]),
      stadionName: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
      districts: new FormControl('', [Validators.required]),
      subdistricts: new FormControl('', [Validators.required]),
      kelurahan: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
      contactNoStadion: new FormControl('', [Validators.required]),
      guard: new FormControl('', [Validators.required]),
      countfutsalField: new FormControl('', [Validators.required]),
      facebook: new FormControl('', [Validators.required]),
      instagram: new FormControl('', [Validators.required]),
      twitter: new FormControl('', [Validators.required]),
      facilities: new FormControl('', [Validators.required]),
      userType: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9]*"), Validators.minLength(6)]),
      repassword: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9]*"), Validators.minLength(6)]),
      teamName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      contactNo: new FormControl('', [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(1), Validators.maxLength(15)]),
      address: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
      email: new FormControl('', [Validators.required, Validators.pattern(emailPattern), Validators.minLength(1), Validators.maxLength(50)]),
    });

    
  }
  
  doSignup() {
  
    if (this.accountTeam.password != this.validatePassword.repassword) {
      let toast = this.toastCtrl.create({
        message: "Password tidak cocok !",
        duration: 3000,
        position: 'middle'
      });
      toast.present();
    } else {
      let loader = this.loadingCtrl.create({
        content: "Harap Tunggu"
      });
      loader.present();
      // Attempt to login in through our User service
      this.signup.signup(this.accountTeam).subscribe((resp) => {
        if (resp["isSuccessFull"]) {
          loader.dismiss();
          let toast = this.toastCtrl.create({
            message: "Sukses Sign Up !",
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          this.navCtrl.setRoot('LoginPage', {}, {
            animate: true,
            direction: 'forward'
          });
        }
        else {
          loader.dismiss();
          let errors = resp["errors"].map(e=>e.message).join("/n");
          let toast = this.toastCtrl.create({
            message: errors,
            duration: 3000,
            position: 'middle'
          });
          toast.present();
        }

      }, (err) => {
        loader.dismiss();
        let toast = this.toastCtrl.create({
          message: "Gagal Sign Up ! Coba Lagi !",
          duration: 3000,
          position: 'middle'
        });
        toast.present();
      });
    }
  }

  loginPage() {
    this.navCtrl.setRoot('LoginPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }
}
