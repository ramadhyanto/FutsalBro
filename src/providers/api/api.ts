import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PropertiesProvider } from '../properties/properties';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */

@Injectable()
export class Api {
  url: string = "http://192.168.1.103:8080";
  headers;
  constructor(public http: HttpClient, public properties: PropertiesProvider) {
  }

  getHeaders() {
    if (this.properties.token && !this.headers) {
      this.headers = new HttpHeaders().set("Authorization", "Bearer " + this.properties.token);
    }
    return this.headers;
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    if (this.getHeaders()) {
      reqOpts.headers = this.getHeaders();
    }
    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        headers: this.getHeaders()
      };
    }
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        headers: this.getHeaders()
      };
    }
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    console.log(reqOpts);
    // if (!reqOpts) {
      reqOpts.headers = this.getHeaders();
      console.log(reqOpts);
    // }
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }
}
