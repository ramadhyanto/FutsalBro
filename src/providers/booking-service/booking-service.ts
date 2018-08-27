import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the BookingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookingServiceProvider {

  constructor(public http: HttpClient, public api: Api) {
    console.log('Hello BookingServiceProvider Provider');
  }

}
