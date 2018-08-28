import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the ListstadiumServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListstadiumServiceProvider {

  constructor(public http: HttpClient, public api: Api) {
    console.log('Hello ListstadiumServiceProvider Provider');
  }

  getStadium(data: any) {
    console.log(data);
    let req = this.api.get("stadion", data);
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
