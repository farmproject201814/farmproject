import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from './../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SumgradingService {

  constructor(private http: Http) { }

  addData(data) {
    return this.http.post(api.url + '/api/summed/add', data).pipe(map(res => res.json()));
  }

  removeData(key) {
    return this.http.delete(api.url + '/api/summed/remove/' + key).pipe(map(res => res.json()));
  }

  addDataform(data) {
    return this.http.post(api.url + '/api/summed/addform', data).pipe(map(res => res.json()));
  }

  showData() {
    return this.http.get(api.url + '/api/summed/show').pipe(map(res => res.json()));
  }

  editData(key, data) {
    return this.http.post(api.url + '/api/summed/edit/' + key, data).pipe(map(res => res.json()));
  }
  getDataByKey(key) {
    return this.http.get(api.url + '/api/summed/show/' + key).pipe(map(res => res.json()));
  }
}
