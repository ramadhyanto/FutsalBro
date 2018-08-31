import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, LoadingController, SegmentButton } from 'ionic-angular';
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
  data:any;
  account = {
    userType :'USER_TEAM',
    roleUser:'ROLE_USER',
    idCard: '',
    username: '',
    email: '',
    teamName: '',
    address: '',
    contactNo: '',
    password:'',
    facebook : '',
    instagram : '',
    twitter : '',
    countTeam:'',
    isReadyToMatch : true,
    imageProfile : 'IMAGE_PROFILE.png',
    base64Image:''
  };
  accountStadion = {
    userType :'USER_STADION',
    roleUser:'ROLE_USER',
    idCard: '',
    username: '',
    email: '',
    adress: '',
    contactNo: '',
    password:'',
    facebook : '',
    instagram : '',
    twitter : '',
    guard : '',
    zipCode:'',
    kelurahan:'',
    subDistricts:'',
    districts:'',
    province:'',
    stadionName:'',
    countfutsalField:'',
    facilities : '',
    imageProfile : 'IMAGE_PROFILE.png',
    base64Image:''
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
    })
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
      countTeam: new FormControl('', [Validators.required]),
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
    if (this.signUpSegment=="team"){
         this.data=this.account;
    }else{
         this.data=this.accountStadion
    }
   if (this.data.password != this.validatePassword.repassword) {
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
      this.signup.signup(this.data).subscribe((resp) => {
        console.log("response : ",resp);
        console.log("data : ",this.data);
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
