import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PropertiesProvider } from '../../providers/properties/properties';
import { MainPage } from '../';
import { DetailFieldServiceProvider } from '../../providers/detail-field-service/detail-field-service';
import { MessagesProvider } from '../../providers/messages/messages';
/**
 * Generated class for the DetailFieldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-field',
  templateUrl: 'detail-field.html',
})
export class DetailFieldPage {
  fieldId: number;
  data: any;
  dataimage: any;
  databooking: any;
  listImage: any;
  duration: number;
  startTime: string;
  endTime: string;
  stadionId: number;
  price: number;
  totalPayment: number;
  fieldData = { name: "", type: "", price: 0 };

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public detailfield: DetailFieldServiceProvider, public properties: PropertiesProvider,public messages: MessagesProvider) {
    this.fieldId = this.navParams.get('fieldId');
    this.duration = this.navParams.get('duration');
    this.startTime = this.navParams.get('startTime');
    this.endTime = this.navParams.get('endTime');
    this.stadionId = this.navParams.get('stadionId');
    this.price = this.navParams.get('price');
    this.totalPayment = (this.duration * this.price);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailFieldPage');
    this.data = {
      id: this.fieldId
    };
    this.dataimage = {
      futsalFieldId: this.fieldId
    };
    this.databooking = {
      startTime: this.startTime,
      endTime: this.endTime,
      status: "BOOKED",
      teamId: this.properties.teamId,
      stadionId: this.stadionId,
      versusTeamId: null,
      futsalFieldId: this.fieldId,
      duration: this.duration,
      bookingFee: this.totalPayment,
      proofOfPayment: "123.png",
      base64Image: "iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAIAAAC1eHXNAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAA75JREFUWEftmEto1EAYgDNpst3ddndb7cNWBEUPngRP6kEE8QFCBb0K3jx5UA96UVDw6kUQRaW+8S0+UbAUoZVWPNSDB9GDh1pQXK2tu5tsMpOJfzK/td3ubiaJL8SPhZ3/T5N8+0/mz1Diuq7yF6Di95/mX/GwzXs4ikdcD3NiH2ejGMQgrgc1X9vGZQxiEMvDNu4RolilsxjHIKbHeaIqzHqjxF78sTyoeV8h3sAyev1EdKJ7MOsZZxTmBT528QJmoxLdwyqdgknxAA9zMObERPSAu1LzkZgUqAdAjdveV1QienD62qEfMPBVLOMcBpGI6GGXeqEYohIeRGHxGmtUD/PuDwm/HtxRqDWIcXiieDhs1OsZM/GmpnACg/BE8aDGrRmTIoCpsR7jODy4D3LdciG/kZUHiJryLlmPBoUX4JwKD9FRiZr2T6+7il3TVdxM2109tRkzUx4CY2Kv+eWI1xXqm8ySEMg0d5crDXpXtnNI1RZiyqdyX0jL/YX8eoW72KN+HnAfkGjMbGueewlT06iyP+XO5+KnDdQcAZWqvzsCYAA0tZ1vbNruJyqpuU82JnabE0dFVeLYiDI06O3ZjmFVX4zZWdT0AKj5oJDvgePgEUHFuzCcq2rJ7KFUbj9ma1DPA+DOe2rcKH7eFbYwogxaclmmY0BVc5itTYCHgFkjhfwa1ylWaRvVEBKp3M506zFMBSHlISh8XENNaDAY1gKuR4jaNPdOIt2DKQlCrE6tcTWOgiAko6c2YSBHCA+rcCywvwHwJw6bpOWHGMsh68HoS+5MYlAf3CmexlAOWQ9augnPkex6IbAH6MOxHLIedun4bAl4JGHbIXplBZyVWbkfAwmkPDgbc9gnDL4DtweP7Lw+PbXKs5m27MAYPpYRYhMv5WGb16ffRpShIbFozoKvenJdpmMo3XrQnaniTU3pGo4lkPKwiien3nlwM6hEMrsj1/WWqBn/OLSsQ7nuYUI0USQB5xazn2MQhISHy6Z2geJRyHTcappzyk/8QGtc2TJ/UkuuFCogDT62cQUPBxHsYZcuigHMhZZY2tI9lkhvFZkKYDOW7RxOtR7wauarWMUzeCyIAA9mv7CMi96P8+ci2/VK1ebjsRqkc4eznf1ETXo27KtDK3fUVQnwsI2z1HwCg+b2q7PnohZ6cm1L93s9uYJzuILcf0fgPVeH8XfN42NtDhvDOCSlL3vGR1MY1KXe+5Y7eWY91dNbJLtoVWzjhqot0RLLMa5BiPf+L0Wqf/wG/nvM5O/wUJRvnx0MNrp9hO0AAAAASUVORK5CYII="
    };
    console.log(this.databooking);
    this.LoadData();
  }

  LoadData() {
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    console.log(this.dataimage);
    this.detailfield.getImageField(this.dataimage).then((resp) => {
      console.log(resp);
      this.listImage = resp["data"];

    }, (err) => {
      loader.dismiss();
    });
    this.detailfield.getField(this.data).then((resp) => {
      console.log(resp);
      this.fieldData.name = resp["data"]["name"];
      this.fieldData.type = resp["data"]["type"];
      this.fieldData.price = this.totalPayment;
      loader.dismiss();
    }, (err) => {
      loader.dismiss();
    });
  }

  Book() {
    console.log("juuhh");
    let loader = this.loadingCtrl.create({
      content: "Harap Tunggu"
    });
    loader.present();
    console.log(this.databooking);
    this.detailfield.bookField(this.databooking).then((resp) => {

      console.log(resp);
      loader.dismiss();
      this.navCtrl.setRoot(MainPage, {}, {
        animate: true,
        direction: 'forward'
      });
    }, (err) => {
      loader.dismiss();
      // Unable to log in
      this.properties.showDialogError(this.messages.messages.NOT_FOUND);
    });
  }


}
