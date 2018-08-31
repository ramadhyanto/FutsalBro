import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the ListBookingStadionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListBookingStadionServiceProvider {

  constructor(public http: HttpClient, public api:Api) {
    console.log('Hello ListBookingStadionServiceProvider Provider');
  }
  
  getListBookingStadion(data: any) {
    let req = this.api.get("booking", data);
    return new Promise(resolve => {
      req.subscribe(res => {
        resolve(res)
      }, err => {
        console.error('ERROR', err);
      });
    })
  }
}
