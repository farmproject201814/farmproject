import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from './../../../../environments/environment';
import { map } from 'rxjs/operators';
import { keyframes } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class CalculateGService {
  API_URL  =  'http://localhost:8000';

  constructor(private http: Http) { }

  getContacts() {
      return  this.http.get(`${this.API_URL}/calgrade/get`);
  }
  createContact(datatest) {
    return  this.http.post(`${this.API_URL}/calgrade/`, datatest);
  }
}
