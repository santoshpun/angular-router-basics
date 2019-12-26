import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const localUrl = '/assets/data/smartphone.json';

@Injectable()
export class SmartphoneService {

  constructor(private http: HttpClient) { }

  getSmartphone() {
    return this.http.get(localUrl);
  }
}
