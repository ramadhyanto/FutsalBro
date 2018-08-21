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
    let req = this.api.get("team", accountInfo);
    req.subscribe((res: any) => {
    }, err => {
      console.error('ERROR', err);
    });
    return req;
  }

  getPlayer(teamId: any) {
    let req = this.api.get("player", teamId);
    req.subscribe((res: any) => {
    }, err => {
      console.error('ERROR', err);
    });
    return req;
  }

  updateData(accountData: any) {
    let req = this.api.put("team", accountData);
    req.subscribe((res: any) => {
    }, err => {
      console.error('ERROR', err);
    });
    return req;
  }
}
