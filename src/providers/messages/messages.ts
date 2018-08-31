import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MessagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessagesProvider {
messages:any;
  constructor(public http: HttpClient) {
    console.log('Hello MessagesProvider Provider');
    this.messages = {
      NOT_FOUND: "Tidak Ditemukan",
      GAGAL:"Anda Gagal"
    }
  }
  

}
