import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from 'src/app/auth.service';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import * as firebase from 'firebase';

@Component({
  selector: 'app-privilege',
  templateUrl: './privilege.component.html',
  styleUrls: ['./privilege.component.css']
})
export class PrivilegeComponent implements OnInit {
  items = {
    key: '',
    users: '',
    pass: '',
    question: '',
    answer: '',
    fname: '',
    lname: '',
    gender: '',
    day_of_birth: '',
    id_code: '',
    email: '',
    address: '',
    mobile: '',
    phone_num: '',
    fax: '',
    privilege_id: '',
    count_login: '',
    id_member: ''
  };
  date;
  datas: any;
  count;
  privilege;

  constructor(private db: AngularFireDatabase, private auth: AuthService) { }

  ngOnInit() {
    this.auth.showMembers().subscribe(datas => {
      console.log(datas);                    /* Qurey ข้อมูล */
      const value = Object.keys(datas).map(key => datas[key]);
      this.count = Object.values(datas).length;
      this.datas = Object.values(datas);
      for (let i = 0; i < Object.values(datas).length; i++) {
        this.datas[i].key = Object.keys(datas)[i];
        if (value[i].privilege_id === '0') {
          this.datas[i].privilege = 'ยังไม่ได้อนุมัติ';
        } else if (value[i].privilege_id === '1') {
          this.datas[i].privilege = 'แอดมิน';
        } else if (value[i].privilege_id === '2') {
          this.datas[i].privilege = 'แผนกคลัง';
        } else if (value[i].privilege_id === '3') {
          this.datas[i].privilege = 'แผนกตัดเกรด';
        } else if (value[i].privilege_id === '4') {
          this.datas[i].privilege = 'แผนกแปรรูปโค';
        } else if (value[i].privilege_id === '5') {
          this.datas[i].privilege = 'แผนกจำหน่าย';
        } else if (value[i].privilege_id === '6') {
          this.datas[i].privilege = 'แผนกสหกรณ์';
        } else if (value[i].privilege_id === '7') {
          this.datas[i].privilege = 'แผนกนำเข้าโค';
        }
      }
      console.log(value[0].privilege_id);
    });
  }

  editMember(a) {
    console.log(a);
    this.items = a;
      // this.items.$key = $key;
      // this.items.users = users;
      // this.items.pass = pass;
      // this.items.question = question;
      // this.items.answer = answer;
      // this.items.fname = fname;
      // this.items.lname = lname;
      // this.items.gender = gender;
      // this.items.day_of_birth = day_of_birth;
      // this.items.id_code = id_code;
      // this.items.email = email;
      // this.items.address = address;
      // this.items.mobile = mobile;
      // this.items.fax = fax;
  }

  onEditMember(key, dd: NgForm) {
    console.log(key, dd.value);
    this.auth.saveStatusMember(key, dd.value).subscribe();
    this.ngOnInit();
    swal({
      title: 'สำเร็จ!',
      text: 'บันทึกการเปลี่ยนแปลงข้อมูลผู้ใช้งานสำเร็จ',
      type: 'success',
      confirmButtonText: 'ปิด',
      // showConfirmButton: false
    });
    document.getElementById('openModalButton').click();
    // setTimeout(() => location.reload(), 1500);
  }

  onDeleteMember(key) {
    swal({
      title: 'ยืนยัน!',
      text: 'ต้องการลบผู้ใช้งานนี้หรือไม่?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'กลับ'
    }).then((result) => {
      if (result.value) {
        this.auth.removeMember(key).subscribe();
        this.ngOnInit();
        swal({
          title: 'สำเร็จ!',
          text: 'ลบผู้ใช้งานสำเร็จ!',
          type: 'success',
          confirmButtonText: 'ปิด'
        });
      }
    });
  }

  showPass() {
    let x;
    x = document.getElementById('show_pass');
    if (x.type === 'password') {
      x.type = 'text';
  } else {
      x.type = 'password';
    }
  }

  test2() {
    firebase.auth().onAuthStateChanged((user) => {
    console.log(user.uid);
    });
  }
}
