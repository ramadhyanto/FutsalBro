import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the ListFutsalFieldServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListFutsalFieldServiceProvider {

  constructor(public http: HttpClient, public api: Api) {
    console.log('Hello ListFutsalFieldServiceProvider Provider');
  }

  getStadion(data: any) {
    console.log(data);
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

  deleteField(id: any) {
    console.log(id);
    let req = this.api.delete("futsalField", {body:id});
    return new Promise(resolve => {
      req.subscribe(res => {
        resolve(res)
      }, err => {
        console.error('ERROR', err);
      });
    })
  }

}
