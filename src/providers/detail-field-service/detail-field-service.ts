import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the DetailFieldProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DetailFieldServiceProvider {

  constructor(public http: HttpClient, public api: Api) {
    console.log('Hello DetailFieldProvider Provider');
  }

  getField(data: any) {
    let req = this.api.get("futsalField", data);
    return new Promise(resolve => {
      req.subscribe(res => {
        resolve(res)
      }, err => {
        console.error('ERROR', err);
      });
    })

    // return req;
  }

  getImageField(data: any) {
    let req = this.api.get("imageFutsalField", data);
    return new Promise(resolve => {
      req.subscribe(res => {
        resolve(res)
      }, err => {
        console.error('ERROR', err);
      });
    })

    // return req;
  }

  bookField(data: any) {
    let req = this.api.post("booking", data);
    return new Promise(resolve => {
      req.subscribe(res => {
        resolve(res);
      }, err => {
        console.error('ERROR', err);
      });
    })
    // return req;
  }

}
