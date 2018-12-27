import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Menu7Service {

  constructor(private http: Http) { }

  addSetting_room(data, key) {
    return this.http.post(api.url + '/api/store/menu7/all-setting/add/room/' + key , data).pipe(map(res => res.json()));
  }
  showSetting_room() {
    return this.http.get(api.url + '/api/store/menu7/all-setting/show/room').pipe(map(res => res.json()));
  }
  addSetting_class(data, key) {
    return this.http.post(api.url + '/api/store/menu7/all-setting/add/class/' + key , data).pipe(map(res => res.json()));
  }
  showSetting_class() {
    return this.http.get(api.url + '/api/store/menu7/all-setting/show/class').pipe(map(res => res.json()));
  }
  addSetting_bucket(data, key) {
    return this.http.post(api.url + '/api/store/menu7/all-setting/add/bucket/' + key , data).pipe(map(res => res.json()));
  }
  showSetting_bucket() {
    return this.http.get(api.url + '/api/store/menu7/all-setting/show/bucket').pipe(map(res => res.json()));
  }
  addSetting_limitAge(data, key) {
    return this.http.post(api.url + '/api/store/menu7/all-setting/add/limit-age/' + key , data).pipe(map(res => res.json()));
  }
  showSetting_limitAge() {
    return this.http.get(api.url + '/api/store/menu7/all-setting/show/limit-age').pipe(map(res => res.json()));
  }

  addr(data) {
    return this.http.post(api.url + '/api/store/menu7/all-setting/add/room'  , data).pipe(map(res => res.json()));
  }
  addc(data) {
    return this.http.post(api.url + '/api/store/menu7/all-setting/add/class'  , data).pipe(map(res => res.json()));
  }
  addb(data) {
    return this.http.post(api.url + '/api/store/menu7/all-setting/add/bucket'  , data).pipe(map(res => res.json()));
  }
  add_limitAge(data) {
    return this.http.post(api.url + '/api/store/menu7/all-setting/add/limit-age'  , data).pipe(map(res => res.json()));
  }
  add_lastAge(data) {
    return this.http.post(api.url + '/api/store/menu7/all-setting/add/last-age'  , data).pipe(map(res => res.json()));
  }
}
