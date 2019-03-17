import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Menu6Service {

  constructor(private http: Http) { }

  removeNotification_T4(num, key) {
    // tslint:disable-next-line:max-line-length
    return this.http.delete(api.url + '/api/store/simulation/remove/simulation/simulation-t1/' + num + '/' + key).pipe(map(res => res.json()));
  }

  showNotificationT5() {
    return this.http.get(api.url + '/api/store/simulation/show/simulation/simulation-t5/').pipe(map(res => res.json()));
  }

  showNotificationT1() {
    return this.http.get(api.url + '/api/store/menu6/show/notification-t1').pipe(map(res => res.json()));
  }
  removeNotificationT1(key) {
    console.log(key);
    
    return this.http.delete(api.url + '/api/store/remove/notification-t1/' + key).pipe(map(res => res.json()));
  }

  showNotificationT3() {
    return this.http.get(api.url + '/api/store/menu6/show/notification-t3').pipe(map(res => res.json()));
  }
}
