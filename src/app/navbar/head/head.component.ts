import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthService } from 'src/app/service/auth.service';
import { GlobalService } from 'src/app/service/global.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  public isLogin;
  public user;
  datalist: AngularFireList<any>;
  datauser: any[];
  detail;
  constructor(
    private auth: AuthService,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private global: GlobalService,
    private router: Router
  ) {
    this.afAuth.authState.subscribe(data => {
      this.detail = this.db
        .list('/user', ref => ref.orderByChild('email').equalTo(data.email))
        .valueChanges();
      console.log(data.email);
      this.detail.subscribe(snap => {
        snap.forEach(element => {
          this.user = element.fname + ' ' + element.lname;
          this.global.setUser(element.users);
        });
      });
    });
    this.auth.cookieAuth().subscribe(data => {
      this.isLogin = data;
    });
  }

  logout() {
    this.auth.logout();
    location.reload();
  }

  editprofile() {
    this.router.navigate(['/editprofile']);
  }
  ngOnInit() {}
}
