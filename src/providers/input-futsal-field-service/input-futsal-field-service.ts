import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the InputFutsalFieldServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputFutsalFieldServiceProvider {

  constructor(public http: HttpClient, public api: Api) {
    console.log('Hello InputFutsalFieldServiceProvider Provider');
  }

  inputField(data: any) {
    let req = this.api.post("futsalField", data);
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
