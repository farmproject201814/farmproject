import { Component, OnInit } from '@angular/core';
import { Menu7Service } from '../menu7.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

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
  }

  add_settingRoom(a: NgForm, key) {
    this.api_menu7.addSetting_room(a.value, key).subscribe();
    swal({
      title: 'บันทึกจำนวนห้องเก็บ',
      text: 'เรียบร้อยแล้ว',
      type: 'success',
      confirmButtonText: 'ปิด',
      confirmButtonColor: '#da4151'
      // showConfirmButton: false
    });
  }
  add_settingClass(b: NgForm, key) {
    this.api_menu7.addSetting_class(b.value, key).subscribe();
    swal({
      title: 'บันทึกจำนวนชั้นเก็บ',
      text: 'เรียบร้อยแล้ว',
      type: 'success',
      confirmButtonText: 'ปิด',
      confirmButtonColor: '#da4151'
      // showConfirmButton: false
    });
  }
  add_settingBucket(c: NgForm, key) {
    this.api_menu7.addSetting_bucket(c.value, key).subscribe();
    swal({
      title: 'บันทึกจำนวนตะกร้าเก็บ',
      text: 'เรียบร้อยแล้ว',
      type: 'success',
      confirmButtonText: 'ปิด',
      confirmButtonColor: '#da4151'
      // showConfirmButton: false
    });
  }

  sw_alert() {
    swal({
      title: 'บันทึกวันบ่มซากเนื้อโค',
      text: 'เรียบร้อยแล้ว',
      type: 'success',
      confirmButtonText: 'ปิด',
      confirmButtonColor: '#da4151'
      // showConfirmButton: false
    });
  }

  sw_alert2() {
    swal({
      title: 'บันทึกวันใกล้หมดอายุ',
      text: 'เรียบร้อยแล้ว',
      type: 'success',
      confirmButtonText: 'ปิด',
      confirmButtonColor: '#da4151'
      // showConfirmButton: false
    });
  }

  sw_alert6() {
    swal({
      title: 'ล้างรายการนำเข้า',
      text: 'เรียบร้อยแล้ว',
      type: 'success',
      confirmButtonText: 'ปิด',
      confirmButtonColor: '#da4151'
      // showConfirmButton: false
    });
  }

  sw_alert7() {
    swal({
      title: 'ล้างรายการเบิกออก',
      text: 'เรียบร้อยแล้ว',
      type: 'success',
      confirmButtonText: 'ปิด',
      confirmButtonColor: '#da4151'
      // showConfirmButton: false
    });
  }

}
