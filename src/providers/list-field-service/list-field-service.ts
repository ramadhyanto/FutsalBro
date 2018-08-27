import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the ListFieldProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListFieldServiceProvider {

  constructor(public http: HttpClient, public api: Api) {
    console.log('Hello ListFieldProvider Provider');
  }

  getField(data: any) {
    let req = this.api.get("schedule", data);
    return new Promise(resolve => {
      req.subscribe(res => {
        resolve(res)
      }, err => {
        console.error('ERROR', err);
      });
    })

    // return req;
  }
}
