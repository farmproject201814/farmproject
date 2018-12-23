import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../simulation.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-simulation-t2',
  templateUrl: './simulation-t2.component.html',
  styleUrls: ['./simulation-t2.component.css']
})
export class SimulationT2Component implements OnInit {
  count;
  data: any;
  key;
  keyUpdate: any = [];
  date;
  detail: any = [];
  num = 0;
  hid: any;
  add: any;
  id_member_name = [];

  constructor(private api: SimulationService, private auth: AuthService) {
    this.date = new Date();
    this.date = Number(this.date);

    this.test2();
   }

   test2() {
    this.api.test2().subscribe(d => {
      console.log(d);
      this.num = d.count;
    });
   }

  ngOnInit() {
    this.id_member_name = [];
    this.api.showST2(this.num).subscribe(data => {
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

    this.auth.showMembers().subscribe(data => {
      const value = Object.keys(data).map(key => data[key]);
      for (let i = 0; i < Object.values(data).length; i++) {
        if (value[i].privilege_id === '5') {
          if (value[i].id_member !== '-') {
            this.id_member_name.push(value[i].id_member + ' ' + value[i].fname);
          }
        }
      }
    });
  }

  addDataST2(a: NgForm) {
    const p = this.add;
    if (p === undefined) {
      swal({
        title: 'ผิดพลาด!',
        text: 'กรุณาเพิ่มรายการก่อนส่งคำร้องขอเบิก',
        type: 'error',
        confirmButtonText: 'ปิด'
      });
    } else {
      console.log(this.keyUpdate);
      a.value.date = Number(this.date);
      console.log(a.value);
      this.detail.push(a.value);
      this.ngOnInit();
    }
  }

  removeData(k) {
    this.detail.splice(k, 1);
  }

  sendData() {
    console.log(this.keyUpdate);
    swal({
      title: 'ยืนยัน!',
      text: 'ต้องการขอเบิกข้อมูลทั้งหมดใช่หรือไม่?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'กลับ'
    }).then((result) => {
      if (result.value) {
      this.detail.forEach(element => {
        this.api.addST2(element, this.num).subscribe();
      });
        this.ngOnInit();
        swal({
          title: 'สำเร็จ!',
          text: 'ส่งคำร้องขอเบิกสำเร็จ!',
          type: 'success',
          confirmButtonText: 'ปิด'
        }).then(() => {
          this.detail = [];
        });
      }
    });
    this.test2();
  }

  changeType(g) {
    if (g.value === 'ซากซ้าย' || g.value === 'ซากขวา') {
      this.add = g.value;
      this.hid = 1;
    } else if (g.value === 'ซากซ้ายบน' || g.value === 'ซากซ้ายล่าง'
    || g.value === 'ซากขวาบน' || g.value === 'ซากขวาล่าง') {
      this.add = g.value;
      this.hid = 2;
    } else if (g.value !== 'ซากซ้าย' && g.value !== 'ซากซ้าย' && g.value !== 'เครื่องใน' && g.value !== 'หัว'
    && g.value !== 'หาง' && g.value !== 'หนัง' && g.value !== 'ขา' && g.value !== 'ไขมัน' && g.value !== 'อองเร') {
      this.add = g.value;
      this.hid = 3;
    } else if (g.value === 'เครื่องใน' || g.value === 'หัว' || g.value === 'หนัง'
     || g.value === 'หาง' || g.value === 'ขา' || g.value === 'ไขมัน' || g.value === 'อองเร') {
      this.add = g.value;
      this.hid = 4;
  }
    console.log(this.hid, this.add);
  }
}
