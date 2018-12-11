import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Menu3Service {

  constructor(private http: Http) { }

  // showOrderT1() {
  //   return this.http.get(api.url + '/api/store/menu3/show/order/order-t1').pipe(map(res => res.json()));
  // }

  showOrderT2() {
    return this.http.get(api.url + '/api/store/menu3/show/order/order-t2').pipe(map(res => res.json()));
  }

  showOrderT3() {
    return this.http.get(api.url + '/api/store/menu3/show/order/order-t3').pipe(map(res => res.json()));
  }

  showOrderT4() {
    return this.http.get(api.url + '/api/store/menu3/show/order/order-t4').pipe(map(res => res.json()));
  }

  showOrderT5() {
    return this.http.get(api.url + '/api/store/menu3/show/order/order-t5').pipe(map(res => res.json()));
  }
}
