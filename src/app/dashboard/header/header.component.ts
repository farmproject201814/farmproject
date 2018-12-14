import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLogin;
  user;
  detail;
  public privilege_id;
  afterLogin = false;
  user1 = false;
  user2 = false;
  test1 = 0;
  check = 0;
  key;
  constructor(private auth: AuthService, private afAuth: AngularFireAuth, private db: AngularFireDatabase
    , private router: Router) {
  }

  ngOnInit() {
    this.afterLogin = false;
    this.isLogin = false;
    this.user1 = false;
    this.user2 = false;
    this.auth.cookieAuth().subscribe(datas => {
      if (datas === true) {
      this.afAuth.authState.subscribe(data => {
        console.log(data);
        this.auth.showData(data.email).subscribe(s => {
          const value = Object.keys(s).map(key => s[key]);
          console.log(value);
          if (value[0].count_login === '0') {
            this.isLogin = false;
            this.auth.logout();
          } else {
            this.isLogin = datas;
            this.afterLogin = true;
          this.user = value[0].fname; // this.user = value[0].fname + ' ' + value[0].lname;
              // this.global.setUser(element.users);
              this.privilege_id = value[0].privilege_id;
              this.check = value[0].check;
              this.key = Object.keys(s)[0];
              if ((value[0].privilege_id === '1' || value[0].privilege_id === '2') && value[0].check === '1') {
                this.user2 = true;
                this.afterLogin = false;
              } else if ((value[0].privilege_id === '1' || value[0].privilege_id === '3') && value[0].check === '2') {
                this.user1 = true;
                this.afterLogin = false;
              }
            }
        });
        // this.detail = this.db.list('/users', ref => ref.orderByChild('email').equalTo(data.email)).valueChanges();
        // this.detail.subscribe( snap => {
        //   snap.forEach(element => {
        //     this.user = element.fname + ' ' + element.lname;
        //     // this.global.setUser(element.users);
        //     this.privilege_id = element.privilege_id;
        //     this.check = element.check;
        //   });
        // });
      });
    } else {
      this.afterLogin = false;
      this.isLogin = false;
      this.user1 = false;
      this.user2 = false;
    }
    });
    // console.log( 'a: ' + this.afterLogin,
    // 'b: ' + this.isLogin ,
    // 'c: ' + this.user1,
    // 'd: ' + this.user2 );
  }

  logout() {
    this.auth.logout();
    this.auth.updateUser(this.key, {check: '0'}).subscribe();
    this.ngOnInit();
    setTimeout(() =>  location.reload());
  }
  test() {
      this.auth.updateUser(this.key, {check: '0'}).subscribe();
      this.ngOnInit();
    // this.router.navigate([('/dashboard2')]);
    setTimeout(() =>  location.reload());
  }
  goSystem1() {
    console.log(this.check);
    // window.open('https://project-902e7.firebaseapp.com/', '_self');
    // console.log(this.privilege_id);
    if (this.privilege_id === '1') {
      this.auth.updateUser(this.key, {check: '1'}).subscribe();
      this.router.navigate([('/dashboard_store')]);
      this.ngOnInit();
    } else {
      if (this.privilege_id === '2') {
        this.auth.updateUser(this.key, {check: '1'}).subscribe();
        this.router.navigate([('/dashboard_store')]);
        this.ngOnInit();
      } else {
        swal({
          title: 'ผิดพลาด!',
          text: 'คุณไม่ได้รับสิทธิ์เข้าใช้งานระบบนี้',
          type: 'error',
          confirmButtonText: 'ปิด'
        });
      }
    }
  }
  goSystem2() {
    console.log(this.privilege_id);
    if (this.privilege_id === '1') {
      this.auth.updateUser(this.key, {check: '2'}).subscribe();
      this.ngOnInit();
      this.router.navigate([('/beefgrading')]);
    } else {
      if (this.privilege_id === '3') {
        this.auth.updateUser(this.key, {check: '2'}).subscribe();
        this.ngOnInit();
        this.router.navigate([('/beefgrading')]);
      } else {
        swal({
          title: 'ผิดพลาด!',
          text: 'คุณไม่ได้รับสิทธิ์เข้าใช้งานระบบนี้',
          type: 'error',
          confirmButtonText: 'ปิด'
        });
      }
    }
  }
}
