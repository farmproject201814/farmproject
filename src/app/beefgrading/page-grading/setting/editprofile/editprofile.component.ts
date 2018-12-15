import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  key;

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
    fax: '',
    privilege_id: '',
    count_login: ''
  };

  datalist: AngularFireList<any>;
  datauser: any[];
  data: Observable<any[]>;
  picName = 'เลือกไฟล์รูปภาพ';
  detail;
  public users;
  public userfirst;
  public userlast;
  public efname;
  public elname;
  public email;
  public day_of_birth;
  public gender;
  public id_code;
  public address;
  public city;
  public State;
  public zip;
  public phone_num;
  public fax;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private auth: AuthService
  ) {
    this.afAuth.authState.subscribe(data => {
      this.detail = this.db
        .list('/users', ref => ref.orderByChild('email').equalTo(data.email))
        .valueChanges();
      console.log(data.email);
      this.detail.subscribe(snap => {
        snap.forEach(element => {
          this.userfirst = element.fname;
          this.userlast = element.lname;
          this.State = element.State;
          this.address = element.address;
          this.city = element.city;
          this.day_of_birth = element.day_of_birth;
          this.efname = element.efname;
          this.elname = element.elname;
          this.email = element.email;
          this.fax = element.fax;
          this.id_code = element.id_code;
          this.phone_num = element.mobile;
          this.zip = element.zip;
          this.users = element.users;
          this.gender = element.gender;
        });
      });
    });

  }

  ngOnInit() {
  }

}


