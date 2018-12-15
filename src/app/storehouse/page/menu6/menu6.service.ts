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

  showNotificationT5(num) {
    return this.http.get(api.url + '/api/store/simulation/show/simulation/simulation-t5/' + num).pipe(map(res => res.json()));
  }
}
