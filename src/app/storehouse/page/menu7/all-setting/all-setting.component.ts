import { Component, OnInit } from '@angular/core';
import { Menu7Service } from '../menu7.service';
import { NgForm } from '@angular/forms';

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
  }
  add_settingClass(b: NgForm, key) {
    this.api_menu7.addSetting_class(b.value, key).subscribe();
  }
  add_settingBucket(c: NgForm, key) {
    this.api_menu7.addSetting_bucket(c.value, key).subscribe();
  }
}
