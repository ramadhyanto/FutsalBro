import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PropertiesProvider } from '../properties/properties';
import { Api } from '../api/api';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {
  _user: any;
  constructor(public http: HttpClient,public properties: PropertiesProvider, public api: Api) {
    console.log('Hello LoginServiceProvider Provider');
  }

  login(accountInfo: any) {
    let seq = this.api.post("api/login", accountInfo);

    seq.subscribe((res: any) => {
      console.log(res);
      this.properties.token = res.access_token;
      this.properties.userId = res.userId;
      this.properties.userType = res.userType;
      if (res.userType == "USER_TEAM") {
        console.log(this.properties.userId);
        this.getIdTeam({userId: this.properties.userId});
      } else {
        this.getIdStadion({userId: this.properties.userId});
      } 
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }
  

  getIdTeam(data) {
    let seq = this.api.get("team", data);

    seq.subscribe((res: any) => {
      console.log(res);
      this.properties.teamId = res.data.id;
      console.log(this.properties.teamId);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  getIdStadion(data) {
    let seq = this.api.get("stadion", data);
    seq.subscribe((res: any) => {
      this.properties.stadionId = res.data[0].id;
      console.log(this.properties.stadionId);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  

  detailProfile() {
    let params = { id: 81 };
    let req = this.api.get('team', params);
    req.subscribe((res: any) => {
      console.log(res);
      // If the API returned a successful response, mark the user as logged in
      console.log(res.isSuccessFull);
    }, err => {
      console.error('ERROR', err);
    });

  }

}
