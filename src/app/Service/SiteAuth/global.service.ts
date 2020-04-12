import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let proxy = "https://cors-anywhere.herokuapp.com/";

@Injectable({
  providedIn: 'root'
})


export class GlobalService {

  public apiHostUrl;
  apiHost: string;
  constructor() {
    if (environment.production == true) {
      this.apiHostUrl = proxy + 'http://localhost/services/api/';
      // this.apiHostUrl = proxy + 'https://api1.staging4.bigcityvoucher.co.in/v1';
    } else {
      this.apiHostUrl =  'http://localhost/services/api/';
      // this.apiHostUrl = 'http://localhost/kingservice/api/web/v1';
      // this.apiHostUrl = proxy + 'https://api1.staging4.bigcityvoucher.co.in/v1';
    }
  }
}
