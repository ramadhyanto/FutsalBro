import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the SignupServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SignupServiceProvider {
  _user: any;

  constructor(public http: HttpClient, public api: Api) {
    console.log('Hello SignupServiceProvider Provider');
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

}
