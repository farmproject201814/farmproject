import { Component, OnInit } from '@angular/core';
import { Menu7Service } from '../menu7.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import * as firebase from 'firebase';

@Component({
  selector: 'app-all-setting',
  templateUrl: './all-setting.component.html',
  styleUrls: ['./all-setting.component.css']
})
export class AllSettingComponent implements OnInit {
  count;
  data: any;
  room: any;
  class: any;
  bucket: any;
  lim_age: any;
  lim_day_aging: any;
  day_aging_sd: any;

  constructor(private api_menu7: Menu7Service) { }

  ngOnInit() {
    this.api_menu7.showSetting_room().subscribe(data1 => {        /* แสดงจำนวนห้องตามที่ตั้งค่า */
      const let1 = Object.keys(data1).map(a1 => data1[a1]);
      console.log(let1);
      this.room = let1[0];
      this.room.key = Object.keys(data1)[0];
    });
    this.api_menu7.showSetting_class().subscribe(data2 => {        /* แสดงจำนวนชั้นตามที่ตั้งค่า */
      const let2 = Object.keys(data2).map(a2 => data2[a2]);
      console.log(let2);
      this.class = let2[0];
      this.class.key = Object.keys(data2)[0];
    });
    this.api_menu7.showSetting_bucket().subscribe(data3 => {        /* แสดงจำนวนตะกร้าตามที่ตั้งค่า */
      const let3 = Object.keys(data3).map(a3 => data3[a3]);
      console.log(let3);
      this.bucket = let3[0];
      this.bucket.key = Object.keys(data3)[0];
    });
    this.api_menu7.showSetting_limitAge().subscribe(data4 => {        /* แสดงจำนวนลิมิตอายุซากตามที่ตั้งค่า */
      const let4 = Object.keys(data4).map(a4 => data4[a4]);
      console.log(let4);
      this.lim_age = let4[0];
      this.lim_age.key = Object.keys(data4)[0];
    });
    this.api_menu7.showSetting_limit_day_Aging().subscribe(data5 => {        /* แสดงจำนวนลิมิตวันบ่มตามที่ตั้งค่า */
      const let5 = Object.keys(data5).map(a5 => data5[a5]);
      console.log(let5);
      this.lim_day_aging = let5[0];
      this.lim_day_aging.key = Object.keys(data5)[0];
    });
    this.api_menu7.showSetting_day_aging_Sd().subscribe(data6 => {        /* แสดงจำนวนลิมิตวันบ่มตามที่ตั้งค่า */
      const let6 = Object.keys(data6).map(a6 => data6[a6]);
      console.log(let6);
      this.day_aging_sd = let6[0];
      this.day_aging_sd.key = Object.keys(data6)[0];
    });
  }

  add_settingRoom(a: NgForm, key) {
    console.log(a.value);
    if (a.value.s_room === '0' || a.value.s_room < '0') {
      swal({
        title: 'ผิดพลาด!',
        text: 'กำหนดจำนวนห้องเก็บไม่ถูกต้อง',
        type: 'error',
        confirmButtonText: 'ตกลง',
        // showConfirmButton: false
      });
    } else {
      this.api_menu7.addSetting_room(a.value, key).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'กำหนดจำนวนห้องเก็บสำเร็จ',
        type: 'success',
        confirmButtonText: 'ตกลง',
        // showConfirmButton: false
      });
    }

  }
  add_settingClass(b: NgForm, key) {
    if (b.value.s_class === '0' || b.value.s_class < '0') {
      swal({
        title: 'ผิดพลาด!',
        text: 'กำหนดจำนวนชั้นเก็บไม่ถูกต้อง',
        type: 'error',
        confirmButtonText: 'ตกลง',
        // showConfirmButton: false
      });
     } else {
        this.api_menu7.addSetting_class(b.value, key).subscribe();
        swal({
          title: 'สำเร็จ!',
          text: 'กำหนดจำนวนชั้นเก็บสำเร็จ',
          type: 'success',
          confirmButtonText: 'ตกลง',
          // showConfirmButton: false
        });
      }
  }
  add_settingBucket(c: NgForm, key) {
    if (c.value.s_bucket === '0' || c.value.s_bucket < '0') {
      swal({
        title: 'ผิดพลาด!',
        text: 'กำหนดจำนวนตะกร้าเก็บไม่ถูกต้อง',
        type: 'error',
        confirmButtonText: 'ตกลง',
        // showConfirmButton: false
      });
     } else {
      this.api_menu7.addSetting_bucket(c.value, key).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'กำหนดจำนวนตะกร้าเก็บสำเร็จ',
        type: 'success',
        confirmButtonText: 'ตกลง',
        // showConfirmButton: false
      });
     }
    }

     add_settingLimit_age(rr: NgForm, key) {
      if (rr.value.limit_age === '0' || rr.value.limit_age < '0') {
        swal({
          title: 'ผิดพลาด!',
          text: 'กำหนดลิมิตอายุซากไม่ถูกต้อง',
          type: 'error',
          confirmButtonText: 'ตกลง',
          // confirmButtonColor: '#da4151'
          // showConfirmButton: false
        });
       } else {
        this.api_menu7.addSetting_limitAge(rr.value, key).subscribe();
        swal({
          title: 'สำเร็จ!',
          text: 'บันทึกลิมิตอายุซากสำเร็จ',
          type: 'success',
          confirmButtonText: 'ตกลง',
          // showConfirmButton: false
        });
       }
  }

  add_settingLimit_day_aging(rq: NgForm, key, key2) {
    console.log(rq.value, key);
    if (rq.value.limit_day_aging === '0' || rq.value.limit_day_aging < '0') {
      swal({
        title: 'ผิดพลาด!',
        text: 'กำหนดลิมิตวันบ่มไม่ถูกต้อง',
        type: 'error',
        confirmButtonText: 'ตกลง',
        // confirmButtonColor: '#da4151'
        // showConfirmButton: false
      });
     } else {
      this.api_menu7.addSetting_limit_day_Aging({limit_day_aging: rq.value.limit_day_aging}, key).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'บันทึกลิมิตวันบ่มสำเร็จ',
        type: 'success',
        confirmButtonText: 'ตกลง',
        // showConfirmButton: false
      });
     }

     if (rq.value.day_aging_sd === '0' || rq.value.day_aging_sd < '0') {
      swal({
        title: 'ผิดพลาด!',
        text: 'กำหนดวันบ่มมาตรฐานไม่ถูกต้อง',
        type: 'error',
        confirmButtonText: 'ตกลง',
        // confirmButtonColor: '#da4151'
        // showConfirmButton: false
      });
     } else {
      this.api_menu7.addSetting_day_aging_Sd({day_aging_sd: rq.value.day_aging_sd}, key2).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'บันทึกวันบ่มมาตรฐานสำเร็จ',
        type: 'success',
        confirmButtonText: 'ตกลง',
        // showConfirmButton: false
      });
     }
}

  onDelete_import() {     // ล้างรายการนำเข้า
    swal({
      title: 'ยืนยัน!',
      text: 'ต้องการล้างรายนำเข้าทั้งหมดหรือไม่?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'กลับ'
    }).then((result) => {
      if (result.value) {
        const del = firebase.database().ref('store/simulation/simulation-t1');
        del.remove();
          swal({
            title: 'สำเร็จ!',
            text: 'ล้างรายนำเข้าเรียบร้อยแล้ว',
            type: 'success',
            confirmButtonText: 'ปิด',
            confirmButtonColor: '#da4151'
          });
      }
    });
  }

  onDelete_export() {   // ล้างรายการเบิกออก
    swal({
      title: 'ยืนยัน!',
      text: 'ต้องการล้างรายเบิกออกทั้งหมดหรือไม่?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'กลับ'
    }).then((result) => {
      if (result.value) {
        const del2 = firebase.database().ref('store/simulation/simulation-t2');
        del2.remove();
          swal({
            title: 'สำเร็จ!',
            text: 'ล้างรายนำเข้าเรียบร้อยแล้ว',
            type: 'success',
            confirmButtonText: 'ปิด',
            confirmButtonColor: '#da4151'
          });
      }
    });
  }

  //     add_day_limit_sd(p: NgForm) {
  //   this.api_menu7.add_day_aging_Sd(p.value).subscribe();
  // }
  //   addd(p: NgForm) {
  //   this.api_menu7.add_lastAge(p.value).subscribe();
  // }
  // add_c(d: NgForm) {
  //   this.api_menu7.addc(d.value).subscribe();
  // }
  // add_b(q: NgForm) {
  //   this.api_menu7.addb(q.value).subscribe();
  // }
  // add_limit_age(r: NgForm) {
  //   this.api_menu7.add_limitAge(r.value).subscribe();
  // }
    //     add_limit_day_aging(r: NgForm) {
    //   this.api_menu7.add_limit_day_Aging(r.value).subscribe();
    // }
}
