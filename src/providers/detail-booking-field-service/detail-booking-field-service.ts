import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';
/*
  Generated class for the DetailBookingFieldServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DetailBookingFieldServiceProvider {

  constructor(public http: HttpClient, public api:Api) {
    console.log('Hello DetailBookingFieldServiceProvider Provider');
  }

  updateBookingField(data: any) {
    let seq = this.api.put("booking", data);
    seq.subscribe((res: any) => {
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

}
