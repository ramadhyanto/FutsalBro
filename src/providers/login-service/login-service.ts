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
      this._loggedIn(res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  _loggedIn(resp) {
    this._user = resp.user;
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
