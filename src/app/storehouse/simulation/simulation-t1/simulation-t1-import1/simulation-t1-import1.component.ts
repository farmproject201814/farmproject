import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../../simulation.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { ActivatedRoute } from '@angular/router';
import { Menu7Service } from 'src/app/storehouse/page/menu7/menu7.service';

@Component({
  selector: 'app-simulation-t1-import1',
  templateUrl: './simulation-t1-import1.component.html',
  styleUrls: ['./simulation-t1-import1.component.css']
})

export class SimulationT1Import1Component implements OnInit {
  count;
  data: any;
  key;
  keyUpdate: any = [];
  date;
  detail: any = [];
  num = 0;
  hid = 1;
  r = [];
  c = [];
  b = [];
  lim_age = [];

  constructor(private api: SimulationService, private api_menu7: Menu7Service) {
    this.date = new Date();
    // this.date = Number(this.date);

    this.test1();
   }

   test1() {
    this.api.test().subscribe(d => {
      console.log(d);
      this.num = d.count;
    });
   }

  ngOnInit() {
    this.api.showST1(this.num).subscribe(data => {
      if (data !== null) {
        this.count = Object.values(data).length;        /* นับจำนวนรายการทั้งหมดในตาราง */
        this.data = Object.values(data);                /* Qurey ข้อมูล */
        for (let i = 0; i < Object.values(data).length; i++) {
          this.data[i].key = Object.keys(data)[i];
          this.keyUpdate.push(Object.keys(data)[i]);
        }
      } else {
        this.data = [];
      }
    });

    this.api_menu7.showSetting_class().subscribe(data => {        /* แสดงจำนวนชั้นตามที่ตั้งค่า */
      const let2 = Object.keys(data).map(a => data[a]);
      console.log(let2);
      for (let i = 0 ; i < Number(let2[0].s_class) ; i++) {
        this.c.push(i + 1);
      }
    });
      this.api_menu7.showSetting_bucket().subscribe(data => {        /* แสดงจำนวนตะกร้าตามที่ตั้งค่า */
      const let3 = Object.keys(data).map(a => data[a]);
      console.log(let3);
      for (let i = 0 ; i < Number(let3[0].s_bucket) ; i++) {
        this.b.push(i + 1);
      }
    });
      this.api_menu7.showSetting_limitAge().subscribe(data => {        /* แสดงจำนวนลิมิตอายุซากตามที่ตั้งค่า */
      const let4 = Object.keys(data).map(a => data[a]);
      console.log(let4);
      for (let i = 0 ; i < Number(let4[0].limit_age) ; i++) {
        this.lim_age.push(i + 1);
      }
    });
  }

  addDataST1(a: NgForm) {
    console.log(this.keyUpdate);
    a.value.date = Number(this.date);
    console.log(a.value);
    this.detail.push(a.value);
    this.ngOnInit();
  }

  removeData(k) {
    this.detail.splice(k, 1);
  }

  sendData() {
    console.log(this.keyUpdate);
    swal({
      title: 'ยืนยัน!',
      text: 'ต้องการนำเข้าข้อมูลทั้งหมดลงคลังหรือไม่?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'กลับ'
    }).then((result) => {
      if (result.value) {
      this.detail.forEach(element => {
        this.api.addST1(element, this.num).subscribe();
      });
        this.ngOnInit();
        swal({
          title: 'สำเร็จ!',
          text: 'นำเข้าคลังสำเร็จ!',
          type: 'success',
          confirmButtonText: 'ปิด'
        }).then(() => {
          this.detail = [];
        });
      }
    });
    this.test1();
  }

  changeType(g) {
    this.hid = g.value;
    console.log(this.hid);
  }

  // test2() {
  //   const toast = swal.mixin({
  //     toast: true,
  //     position: 'bottom-end',
  //     showConfirmButton: false,
  //     timer: 5000
  //   });
  //   toast({
  //     type: 'warning',
  //     title: 'คุณมี 1 การแจ้งเตือน'
  //   });
  // }
}
