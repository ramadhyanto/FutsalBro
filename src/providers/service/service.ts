import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { PropertiesProvider } from '../properties/properties';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  _user: any;

  constructor(public api: Api, public properties: PropertiesProvider, public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

  // LOGIN & SIGNUP SERVICE
  login(accountInfo: any) {
    let seq = this.api.post("api/login", accountInfo);

    seq.subscribe((res: any) => {
      this.properties.token = res.access_token;
      this._loggedIn(res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  signup(accountInfo: any) {
    let seq = this.api.post("register", accountInfo);
    seq.subscribe((res: any) => {
    }, err => {
      console.error('ERROR', err);
    });

    return seq;

  }

  logout() {
    this._user = null;
  }

  _loggedIn(resp) {
    this._user = resp.user;
  }
  // LOGIN & SIGNUP SERVICE

}
