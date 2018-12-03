import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from 'src/app/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  checkUsers = [];
  check = 0;
  data;
  checkuser = [];
  checkpass = [];
  checkemail = [];
  checkp = [];
  logindata: Observable<any[]>;

  constructor(private db: AngularFireDatabase, private router: Router, private auth: AuthService) {
  this.logindata = this.db.list('/users').valueChanges();
  this.logindata.subscribe(data => {
    data.forEach(element => {
      this.checkemail.push(element.email);
      this.checkpass.push(element.pass);
      this.checkuser.push(element.users);
      this.checkp.push(element.privilege_id);
      });
    });
  }

  ngOnInit() {
  }

  authenUsers(data: NgForm) {
  let c = 0;
  for (let i = 0 ; i < this.checkemail.length; i++) {
    if ((this.checkemail[i] === data.value.users || this.checkuser[i] === data.value.users) && this.checkpass[i] === data.value.pass) {
      this.check = 1;
      c = i;
      break;
    } else {
      this.check = 0;
    }
  }
  if (this.check === 1) {
    if (this.checkp[c] === '0') {
      swal({
        title: 'ผิดพลาด!',
        text: 'คุณยังไม่ได้รับสิทธิ์ในการเข้าใช้งาน กรุณาติดต่อผู้ดูแลระบบ',
        type: 'error',
        confirmButtonText: 'ปิด'
      });
    } else {
      this.auth.login(this.checkemail[c], this.checkpass[c]);
    }
  } else {
    swal({
      title: 'ผิดพลาด!',
      text: 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง กรุณาตรวจสอบใหม่อีกครั้ง',
      type: 'error',
      confirmButtonText: 'ปิด'
    });
  }
}
}
