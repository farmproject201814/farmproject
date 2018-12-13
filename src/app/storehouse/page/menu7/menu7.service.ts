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
}
