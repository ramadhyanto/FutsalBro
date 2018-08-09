import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import { PropertiesProvider } from '../properties/properties';

@Injectable()
export class User {
  _user: any;

  constructor(public api: Api, public properties: PropertiesProvider) { }

  detailProfile() {
    let params = { id: 81 };
    let req = this.api.get('team', params);
    req.subscribe((res: any) => {
      console.log(res);
      // If the API returned a successful response, mark the user as logged in
      console.log(res.isSuccessFull);
    }, err => {
      console.error('ERROR', err);
    });

  }

}
