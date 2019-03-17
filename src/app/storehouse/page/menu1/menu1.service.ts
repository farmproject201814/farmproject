import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from 'src/environments/environment'; // import pate ของ api เข้ามาใช้งาน
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Menu1Service {

  constructor(private http: Http) { }

  // api ทดสอบ
  test() { return this.http.get(api.url + '/api/store/menu1/test').pipe(map(res => res.json())); }

  showAging() {
    return this.http.get(api.url + '/api/store/menu1/show/aging').pipe(map(res => res.json()));
  }
  addAging(data) {
    return this.http.post(api.url + '/api/store/menu1/add/aging' , data).pipe(map(res => res.json()));
  }
  showHistoryOrder() {
    return this.http.get(api.url + '/api/store/menu1/show/history-order').pipe(map(res => res.json()));
  }
  updateStatus(data) {
    return this.http.post(api.url + '/api/store/menu1/update/aging' , data).pipe(map(res => res.json()));
  }
  updateStatus2(data) {
    return this.http.post(api.url + '/api/store/menu1/update2/aging' , data).pipe(map(res => res.json()));
  }
  updateStatus_to_store(data) {
    return this.http.get(api.url + '/api/store/menu1/update-status-to-store/' + data).pipe(map(res => res.json()));
  }
  updateStatus_to_store2(data) {
    return this.http.post(api.url + '/api/store/menu1/update-status-to-store2' , data).pipe(map(res => res.json()));
  }

  update_status_complete(data) {
    console.log('sss');
    console.log(data);
    return this.http.post(api.url + '/api/store/menu1/update-status-complete' , data).pipe(map(res => res.json()));
  }
  update_status_complete2(data) {
    return this.http.post(api.url + '/api/store/menu1/update-status-complete2' , data).pipe(map(res => res.json()));
  }
  history_notification_t3(data) {
    return this.http.post(api.url + '/api/store/menu6/history/aging-complete' , data).pipe(map(res => res.json()));
  }
}
