import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Menu4Service {

  constructor(private http: Http) { }

  showStore() {
    return this.http.get(api.url + '/api/store/menu4/show/store-t1').pipe(map(res => res.json()));
  }
  addStore(data) {
    return this.http.post(api.url + '/api/store/menu4/add/store-t1' , data).pipe(map(res => res.json()));
  }

  updateHidden1(key) {
    return this.http.get(api.url + '/api/store/menu4/update-h1/store-t1/' + key).pipe(map(res => res.json()));
  }
  updateHidden0(key) {
    return this.http.get(api.url + '/api/store/menu4/update-h0/store-t1/' + key).pipe(map(res => res.json()));
  }

  copyToOrder(data) {
    return this.http.post(api.url + '/api/store/menu3/history/order', data).pipe(map(res => res.json()));
  }
  updateNewStatus(data) {
    return this.http.post(api.url + '/api/store/menu4/update-status/store-t1', data).pipe(map(res => res.json()));
  }
  copyToNotificationT5(data) {
    return this.http.post(api.url + '/api/store/menu6/history/order', data).pipe(map(res => res.json()));
  }
}
