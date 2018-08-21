import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';
import { PropertiesProvider } from '../../providers/properties/properties';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Crop } from '../../../node_modules/@ionic-native/crop';
import { ImagePicker } from '@ionic-native/image-picker';

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
  profileform: FormGroup;
  playerList: any;
  playerId: number;
  data: { userId: number } = {
    userId: this.properties.userId
  };
  player: { teamId: number } = {
    teamId: this.playerId
  };

  accountData: { id: number, userId: number, idCard: string, email: string, imageProfile: string, address: string, facebook: string, instagram: string, twitter: string, teamName: string, countTeam: number, contactNo: string, isReadyToMatch: boolean, base64Image: string } = {
    "id": 0,
    "userId": this.properties.userId,
    "idCard": "",
    "imageProfile": "32313131.png",
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

  photos: any;
  teamName: string;
  address: string;
  contactNo: string;
  email: string;
  facebook: string;
  idCard: string;
  base64Image: string;
  instagram: string;
  twitter: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public profile: ProfileServiceProvider, public properties: PropertiesProvider, public toastCtrl: ToastController, public cropService: Crop, public imagePicker: ImagePicker) {
    let emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.profileform = new FormGroup({
      idCard: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9]*"), Validators.minLength(5), Validators.maxLength(20)]),
      teamName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      contactNo: new FormControl('', [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(1), Validators.maxLength(15)]),
      address: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
      email: new FormControl('', [Validators.required, Validators.pattern(emailPattern), Validators.minLength(1), Validators.maxLength(50)]),
    });
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
    this.profile.getProfile(this.data).then((resp) => {
      this.accountData.id = resp["data"]["id"];
      this.accountData.teamName = resp["data"]["teamName"];
      this.accountData.address = resp["data"]["address"];
      this.accountData.contactNo = resp["data"]["contactNo"];
      this.accountData.email = resp["data"]["email"];
      this.accountData.facebook = resp["data"]["facebook"];
      this.accountData.idCard = resp["data"]["idCard"];
      this.accountData.instagram = resp["data"]["instagram"];
      this.accountData.twitter = resp["data"]["twitter"];
      this.accountData.base64Image = resp["data"]["base64Image"];
      this.profile.getPlayer(this.player).subscribe((resp) => {
        this.playerList = resp["data"];
        loader.dismiss();
      }, (err) => {
        loader.dismiss();
      });
    }, (err) => {
      loader.dismiss();
    });
  }

  updateData() {
    console.log("juuhh");
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    console.log(this.accountData);
    this.profile.updateData(this.accountData).then((resp) => {
      console.log(resp);
      loader.dismiss();
    }, (err) => {
      loader.dismiss();
      // Unable to log in
      this.properties.showDialogError();
    });
  }

  openImagePicker() {
    let options = {
      maximumImagesCount: 5,
    }
    this.photos = new Array<string>();
    this.imagePicker.getPictures(options)
      .then((results) => {
        this.reduceImages(results).then(() => {
          console.log('all images cropped!!');
        });
      }, (err) => { console.log(err) });
  }

  reduceImages(selected_pictures: any): any {
    return selected_pictures.reduce((promise: any, item: any) => {
      return promise.then((result) => {
        return this.cropService.crop(item, { quality: 75 })
          .then(cropped_image => this.photos.push(cropped_image));
      });
    }, Promise.resolve());
  }

}
