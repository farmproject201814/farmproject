import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Menu2Service {

  constructor(private http: Http) { }

  showHistory_Import() {
    return this.http.get(api.url + '/api/store/menu2/show/import').pipe(map(res => res.json()));
  }
  keepHistory_Import(data) {
    return this.http.post(api.url + '/api/store/menu2/add/import' , data).pipe(map(res => res.json()));
  }
}
