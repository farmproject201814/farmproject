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

  showHistory_Order() {
    return this.http.get(api.url + '/api/store/menu3/show/order').pipe(map(res => res.json()));
  }
}
