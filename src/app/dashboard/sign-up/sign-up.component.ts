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
  count;
  count_id: any;
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.count = 0;
    this.auth.showMember().subscribe(data => {
    if (data === null) {
      this.user = [];
    } else {
      this.user = Object.values(data);
    }
     });

     const p1 = '00';
     const p2 = '0';
     this.auth.showMember().subscribe(d => {
       const value = Object.keys(d);
       for (let i = 0; i < value.length ; i++) {
         const le = value.length + 1;
         this.count = le;
       }
       this.count = this.count - 2;
       if (this.count < 10) {
         this.count_id = p1 + this.count;
       } else if (this.count < 100) {
         this.count_id = p2 + this.count;
       } else {
         this.count_id = this.count;
       }
       console.log(this.count_id);
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
      this.router.navigate(['/sign-in']);
      swal({
        title: 'สำเร็จ!',
        text: 'สมัครสมาชิกสำเร็จ ปิดหน้าต่างนี้เพื่อเข้าสู่ระบบ',
        type: 'success',
        confirmButtonText: 'ปิด'
      });
    } else {
    let c = 0;
    for (let i = 0 ; i < this.user.length ; i++) {
      if (datas.value.users === this.user[i].users) {
        c = c;
      } else {
        c++;
      }
    }

    // this.auth.showMember().subscribe(y => {
    //   const v = Object.keys(y).map(d2 => y[d2]);
    //   for (let i = 0; i < v.length ; i++) {
    //     if (v[i].id_code === datas.value.id_code) {
    //       swal({
    //         title: 'ผิดพลาด!',
    //         text: 'สมัครสมาชิกไม่สำเร็จ เนื่องจากมีเลขบัตรประชาชนนี้ในระบบแล้ว',
    //         type: 'error',
    //         confirmButtonText: 'ปิด'
    //       });
    //     }
    //     console.log('*********');
    //     console.log(datas.value.id_code);
    //   }
    // });

    if (c === this.user.length) {
      this.checkuser = true;
      this.auth.register(datas.value.email, datas.value.pass);
      this.auth.registerMember(datas.value).subscribe();
      this.router.navigate(['/sign-in']);
      swal({
        title: 'สำเร็จ!',
        text: 'สมัครสมาชิกสำเร็จ',
        type: 'success',
        confirmButtonText: 'ปิด'
      });
    } else {
      this.checkuser = false;
      swal({
        title: 'ผิดพลาด!',
        text: 'สมัครสมาชิกไม่สำเร็จ เนื่องจากมีชื่อผู้ใช้นี้แล้ว',
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
