import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the ModalServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ModalServiceProvider {

  constructor(public http: HttpClient, public api: Api) {
    console.log('Hello ModalServiceProvider Provider');
  }

  getLocation(searchCode: any) {
    console.log(searchCode);
    let req = this.api.get("region", searchCode);
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
