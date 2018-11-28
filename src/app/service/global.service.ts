import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  user: string;
  constructor() { }

  setUser(user) {
    this.user = user;
  }
  getUser() {
    return this.user;
  }

}
