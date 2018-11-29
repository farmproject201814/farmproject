import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  data: any;
  user: any;
  checkuser = true;
  checkpass = true;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.auth.showMember().subscribe(data => {
    if (data === null) {
      this.user = [];
    } else {
      this.user = Object.values(data);
    }
     });
  }

  addUsers(datas: NgForm) {
    console.log(this.user.length);
  if (datas.value.users === '' || datas.value.pass === '' || datas.value.question === ''
    || datas.value.answer === '' || datas.value.fname === '' || datas.value.lname === ''
    || datas.value.day_of_birth === '' || datas.value.id_card === '' || datas.value.email === ''
    || datas.value.address === '' || datas.value.mobile === '') {
      swal({
        title: 'ผิดพลาด!',
        text: 'สมัครสมาชิกไม่สำเร็จ กรุณาตรวจสอบและกรอกข้อมูลให้ครบถ้วน',
        type: 'error',
        confirmButtonText: 'ปิด'
      });
} else {
  if (datas.value.pass === datas.value.password) {
    this.checkpass = true;
    delete datas.value.password;

    if (this.user.length === 0 ) {
    this.auth.register(datas.value.email, datas.value.pass);
      this.auth.registerMember(datas.value).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'สมัครสมาชิกสำเร็จ ปิดหน้าต่างนี้เพื่อเข้าสู่ระบบ',
        type: 'success',
        confirmButtonText: 'ปิด'
      });
      this.router.navigate(['/sign-in']);
    } else {
    let c = 0;
    for (let i = 0 ; i < this.user.length ; i++) {
      if (datas.value.users === this.user[i].users) {
        c = c;
      } else {
        c++;
      }
    }
    if (c === this.user.length) {
      this.checkuser = true;
      this.auth.register(datas.value.email, datas.value.pass);
      this.auth.registerMember(datas.value).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'สมัครสมาชิกสำเร็จ ปิดหน้าต่างนี้เพื่อเข้าสู่ระบบ',
        type: 'success',
        confirmButtonText: 'ปิด'
      });
      this.router.navigate(['/sign-in']);
    } else {
      this.checkuser = false;
      swal({
        title: 'ผิดพลาด!',
        text: 'สมัครสมาชิกไม่สำเร็จ มีชื่อผู้ใช้นี้แล้ว',
        type: 'error',
        confirmButtonText: 'ปิด'
      });
    }
  }
  } else {
    this.checkpass = false;
    swal({
      title: 'ผิดพลาด!',
      text: 'สมัครสมาชิกไม่สำเร็จ รหัสผ่านไม่ตรงกัน',
      type: 'error',
      confirmButtonText: 'ปิด'
    });
  }
}
}
}
