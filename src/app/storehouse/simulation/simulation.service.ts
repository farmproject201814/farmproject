import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  constructor(private http: Http) { }

/* --------------- Menu1 ------------------------------------------------------------------------ */
  addAging(data) {
    return this.http.post(api.url + '/api/store/menu1/add/aging', data).pipe(map(res => res.json()));
  }

  addHistoryOrder(data) {
    return this.http.post(api.url + '/api/store/menu1/add/history-order', data).pipe(map(res => res.json()));
  }

/* --------------- Menu2 ------------------------------------------------------------------------ */
  addImportT2(data) {
    return this.http.post(api.url + '/api/store/menu2/add/import/import-t2', data).pipe(map(res => res.json()));
  }

  addImportT3(data) {
    return this.http.post(api.url + '/api/store/menu2/add/import/import-t3', data).pipe(map(res => res.json()));
  }

  addImportT4(data) {
    return this.http.post(api.url + '/api/store/menu2/add/import/import-t4', data).pipe(map(res => res.json()));
  }

  addImportT5(data) {
    return this.http.post(api.url + '/api/store/menu2/add/import/import-t5', data).pipe(map(res => res.json()));
  }

/* --------------- Menu3 ------------------------------------------------------------------------ */
  addOrderT2(data) {
    return this.http.post(api.url + '/api/store/menu3/add/order/order-t2', data).pipe(map(res => res.json()));
  }

  addOrderT3(data) {
    return this.http.post(api.url + '/api/store/menu3/add/order/order-t3', data).pipe(map(res => res.json()));
  }

  addOrderT4(data) {
    return this.http.post(api.url + '/api/store/menu3/add/order/order-t4', data).pipe(map(res => res.json()));
  }

  addOrderT5(data) {
    return this.http.post(api.url + '/api/store/menu3/add/order/order-t5', data).pipe(map(res => res.json()));
  }


  /* -------- simulation-t1-import1 ------------------------------------------------------- */
  addST1(data, num) {
    return this.http.post(api.url + '/api/store/simulation/add/simulation/simulation-t1/' + num, data).pipe(map(res => res.json()));
  }
  showST1(num) {
    return this.http.get(api.url + '/api/store/simulation/show/simulation/simulation-t1/' + num).pipe(map(res => res.json()));
  }
  updateST1(num, data) {
    return this.http.post(api.url + '/api/store/simulation/updateMulti/simulation/simulation-t1/' + num, data).pipe(map(res => res.json()));
  }
  removeST1(key) {
    return this.http.delete(api.url + '/api/store/simulation/remove/simulation/simulation-t1/' + key).pipe(map(res => res.json()));
  }
  test() {
    return this.http.get(api.url + '/api/store/simulation/simulation-t1/allCount').pipe(map(res => res.json()));
  }

  /* -------- simulation-t2 ------------------------------------------------------- */
  addST2(data, num) {
    return this.http.post(api.url + '/api/store/simulation/add/simulation/simulation-t2/' + num, data).pipe(map(res => res.json()));
  }
  showST2(num) {
    return this.http.get(api.url + '/api/store/simulation/show/simulation/simulation-t2/' + num).pipe(map(res => res.json()));
  }
  updateST2(num, data) {
    return this.http.post(api.url + '/api/store/simulation/updateMulti/simulation/simulation-t2/' + num, data).pipe(map(res => res.json()));
  }
  test2() {
    return this.http.get(api.url + '/api/store/simulation/simulation-t2/allCount').pipe(map(res => res.json()));
  }


  countNum_dashboard() {
    return this.http.get(api.url + '/api/store/count-num-dashboard').pipe(map(res => res.json()));
  }
}
