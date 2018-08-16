import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the ProfileServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileServiceProvider {

  constructor(public http: HttpClient, public api: Api) {
    console.log('Hello ProfileServiceProvider Provider');
  }

  getProfile(accountInfo: any) {
    let seq = this.api.get("team", accountInfo);

    seq.subscribe((res: any) => {
      console.log(res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;

  }
}
