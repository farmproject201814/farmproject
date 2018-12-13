import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Menu1Service {

  constructor(private http: Http) { }

  showAging() {
    return this.http.get(api.url + '/api/store/menu1/show/aging').pipe(map(res => res.json()));
  }
  addAging(data) {
    return this.http.post(api.url + '/api/store/menu1/add/aging' , data).pipe(map(res => res.json()));
  }

  showHistoryOrder() {
    return this.http.get(api.url + '/api/store/menu1/show/history-order').pipe(map(res => res.json()));
  }
}
