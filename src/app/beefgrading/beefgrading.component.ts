import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-beefgrading',
  templateUrl: './beefgrading.component.html',
  styleUrls: ['./beefgrading.component.css']
})
export class BeefgradingComponent implements OnInit {

  public isLogin;
  public user;

  detail;
  constructor(
    private auth: AuthService,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
  ) {
    this.afAuth.authState.subscribe(data => {
      this.detail = this.db
        .list('/beefproject/users', ref => ref.orderByChild('email').equalTo(data.email))
        .valueChanges();
      console.log(data.email);
      this.detail.subscribe(snap => {
        snap.forEach(element => {
          this.user = element.fname + ' ' + element.lname;
        });
      });
    });
    this.auth.cookieAuth().subscribe(data => {
      this.isLogin = data;
    });
  }

  logout() {
    this.auth.logout();
  }

  ngOnInit() {
  }

}
