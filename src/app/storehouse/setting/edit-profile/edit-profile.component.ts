import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { UploadService } from 'src/app/service/uploads/shared/upload.service';
import { Upload } from 'src/app/service/uploads/shared/upload';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  detail: any;
  items = {
    $key: '',
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
    id_member: ''
  };
  files: any;
  selectedFiles;
  constructor(private afAuth: AngularFireAuth, private auth: AuthService, private router: Router,
    private upSvc: UploadService) {
     }

  ngOnInit() {
    this.afAuth.authState.subscribe(data => {
    this.auth.showData(data.email).subscribe(snap => {
      this.detail = Object.values(snap);
      this.detail[0].key = Object.keys(snap)[0];
      console.log(this.detail);
    });
  });
  }

  edit_profile($key, users, pass, question, answer, fname, lname, gender,
     day_of_birth, id_code, email, address, mobile, phone_num, fax, id_member) {
      this.items.$key = $key;
      this.items.users = users;
      this.items.pass = pass;
      this.items.question = question;
      this.items.answer = answer;
      this.items.fname = fname;
      this.items.lname = lname;
      this.items.gender = gender;
      this.items.day_of_birth = day_of_birth;
      this.items.id_code = id_code;
      this.items.email = email;
      this.items.address = address;
      this.items.mobile = mobile;
      this.items.phone_num = phone_num;
      this.items.fax = fax;
      this.items.id_member = id_member;
  }

  onEdit_profile(key, dd: NgForm) {
    console.log(key, dd.value);
    this.auth.saveStatusMember(key, dd.value).subscribe();
    this.ngOnInit();
    swal({
      title: 'สำเร็จ!',
      text: 'บันทึกการเปลี่ยนแปลงข้อมูลส่วนตัวสำเร็จ',
      type: 'success',
      confirmButtonText: 'ปิด',
      // showConfirmButton: false
    });
    document.getElementById('openModalButton').click();
    // setTimeout(() => location.reload(), 1500);
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

  show_hide() {
    if (document.getElementById('spoiler') .style.display === 'none') {
      document.getElementById('spoiler') .style.display = '';
    } else {
      document.getElementById('spoiler') .style.display = 'none';
    }
  }

  navigate() {
    document.getElementById('openModalButton').click();
  }

  uploadLogo(event) {
    console.log(event);
        this.files = event.target.files;
    console.log(this.files);
    // this.upSvc.pushUpload(this.files);
    // console.log(this.upSvc);
    // const reader = new FileReader();
    // reader.onload = this._handleReaderLoaded.bind(this);
    // reader.readAsBinaryString(this.files[0]);
    // console.log(this.files);
    // console.log(reader);
  }

//   _handleReaderLoaded(readerEvt) {
//     const binaryString = readerEvt.target.result;
//     this.filestring = btoa(binaryString);  // Converting binary string data.
// }
}
