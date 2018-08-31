import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the DetailBookingStadionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DetailBookingStadionServiceProvider {

  constructor(public http: HttpClient, public api : Api) {
    console.log('Hello DetailBookingStadionServiceProvider Provider');
  }

  updateBookingField(data: any) {
    let seq = this.api.put("booking", data);
    seq.subscribe((res: any) => {
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  getTeam(data: any) {
    let req = this.api.get("team", data);
    return new Promise(resolve => {
      req.subscribe(res => {
        resolve(res)
      }, err => {
        console.error('ERROR', err);
      });
    })
  }

}
