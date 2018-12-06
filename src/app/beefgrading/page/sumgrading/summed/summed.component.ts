import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadService } from 'src/app/service//uploads/shared/upload.service';
import swal from 'sweetalert2';
import { database } from 'firebase';
import { NgForm } from '@angular/forms';
import { GradingService } from 'src/app/service/API/beefgrading/grading.service';
import { SumgradingService } from 'src/app/service/API/beefgrading/sumgrading.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-summed',
  templateUrl: './summed.component.html',
  styleUrls: ['./summed.component.css']
})
export class SummedComponent implements OnInit {

  file;
  key;
  name_ex = {
    fn_ex1: '',
    ln_ex1: '',
    fn_ex2: '',
    ln_ex2: '',
    fn_ex3: '',
    ln_ex3: '',
    fn_ex4: '',
    ln_ex4: '',
    fn_ex5: '',
    ln_ex5: ''
  };
  items = {
    $key: '',
    picture: '',
    grade_sys: ''
  };

  public isLogin;
  public userfirst;
  public userlast;
  public grade_ex;
  public grade_selected;
  public grade_sys;
  public grade_opt1;
  public grade_opt2;

  detail;
  detail_grade_sys;
  datas = [];
  datagrade: any[];
  datesumed = new Date();
  choice;
  Pic;
  grade_end;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private _route: ActivatedRoute,
    private router: Router,
    private apigrade: GradingService,
    private apisummed: SumgradingService
  ) {
    this._route.params.subscribe(params => {
      this.key = params['key'];
    });
    console.log(this.key);
  }

  select_grade(grade_ex) {
    this.grade_ex = grade_ex;
    this.grade_opt1 = grade_ex;
    console.log('grade_ex: ', this.grade_ex);
    console.log('grade_opt1: ', this.grade_opt1);
  }
  select_grade_opt2(grade_opt2) {
 this.grade_opt1 = grade_opt2.target.value ;
 this.grade_ex = this.grade_opt2;
  console.log('grade_opt2: ', this.grade_opt2);
  }
  grade_choice(test) {
    console.log('grade_sys: ' + this.grade_sys);
    console.log('grade_ex: ', this.grade_ex);
    console.log('grade_opt1: ', this.grade_opt1);
    console.log('grade_opt2: ', this.grade_opt2);
    console.log(test);
    this.choice = test;
    console.log(this.choice);
  }

  ngOnInit() {
    this.apigrade.getDataByKey(this.key).subscribe(data => {
      console.log(data);
      this.grade_sys = Object.keys(data).map(key => data[key])[0].grade_sys;
      this.Pic = Object.keys(data).map(key => data[key])[0].picture;
    });

    this.afAuth.authState.subscribe(data => {
      this.detail = this.db
        .list('/users', ref => ref.orderByChild('email').equalTo(data.email))
        .valueChanges();
      console.log(data.email);
      this.detail.subscribe(snap => {
        snap.forEach(element => {
          this.userfirst = element.fname;
          this.userlast = element.lname;
        });
      });
    });
    this.datesumed = new Date();
  }

  addUsers(datas: NgForm) {
    if (this.choice === 1) {
      console.log(this.grade_sys);
     this.grade_end = this.grade_sys;

     this.apigrade.editData(this.key, {grade_ex: this.grade_sys});
    } else {
      console.log(this.grade_opt1);
      this.grade_end = this.grade_opt1;

     this.apigrade.editData(this.key, {grade_ex: this.grade_opt1});
    }
    swal({
      title: 'กำลังบันทึกผลการสรุปเกรด!',
      timer: 2000,
      onOpen: () => {
        swal.showLoading();
          this.apigrade.editData(this.key, {
            status: 'สรุปเกรดแล้ว',
            date_sum: String(this.datesumed)
          }).subscribe();

          this.apigrade.getDataByKey(this.key).subscribe(data1 => {
            const value = Object.keys(data1).map(key => data1[key]);
            console.log(datas.value);
            delete value[0].status;
            value[0].sys_grage_sum_fn = this.userfirst;
            value[0].sys_grage_sum_ln = this.userlast;
            value[0].date_sum = String(this.datesumed);
            value[0].grade_con = this.grade_end;
            value[0].fn_ex1 = datas.value.fn_ex1;
            value[0].ln_ex1 = datas.value.ln_ex1;
            value[0].fn_ex2 = datas.value.fn_ex2;
            value[0].ln_ex2 = datas.value.ln_ex2;
            value[0].fn_ex3 = datas.value.fn_ex3;
            value[0].ln_ex3 = datas.value.ln_ex3;
            value[0].fn_ex4 = datas.value.fn_ex4;
            value[0].ln_ex4 = datas.value.ln_ex4;
            value[0].fn_ex5 = datas.value.fn_ex5;
            value[0].ln_ex5 = datas.value.ln_ex5;
            console.log(value[0]);
            this.apisummed.addData(value[0]).subscribe();
          });
      },
      onClose: () => {
        this.router.navigate(['/sumgrading']);
      }
    }).then(result => {
      if (
        // Read more about handling dismissals
        result.dismiss === swal.DismissReason.timer
      ) {
        console.log('I was closed by the timer');
      }
    });
  }
}
