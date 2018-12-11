import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../../../../simulation/simulation.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { Menu6Service } from '../../menu6.service';

@Component({
  selector: 'app-notification-t4',
  templateUrl: './notification-t4.component.html',
  styleUrls: ['./notification-t4.component.css']
})
export class NotificationT4Component implements OnInit {
  count;
  data: any = [];
  key;
  keyUpdate: any = [];
  date;
  show;
  sub;
  keyUp: any = [];
  numdata;
  n = {
    n1: 0, n2: 0, n3 : 0, n4 : 0, n5 : 0, n6 : 0, n7 : 0, n8 : 0, n9 : 0, n10 : 0,
    n11 : 0, n12 : 0, n13 : 0, n14 : 0, n15 : 0, n16 : 0, n17 : 0, n18 : 0, n19 : 0, n20 : 0,
    n21 : 0, n22 : 0, n23 : 0, n24 : 0, n25 : 0, n26 : 0, n27 : 0, n28 : 0, n29 : 0, n30 : 0, n31 : 0,
  };

  w = {
    w1: 0.00, w2: 0.00, w3 : 0.00, w4 : 0.00, w5 : 0.00, w6 : 0.00, w7 : 0.00, w8 : 0.00, w9 : 0.00,
    w10 : 0.00, w11 : 0.00, w12 : 0.00, w13 : 0.00, w14 : 0.00, w15 : 0.00, w16 : 0.00, w17 : 0.00,
    w18 : 0.00, w19 : 0.00, w20 : 0.00, w21 : 0.00, w22 : 0.00, w23 : 0.00, w24 : 0.00, w25 : 0.00,
    w26 : 0.00, w27 : 0.00, w28 : 0.00, w29 : 0.00, w30 : 0.00, w31 : 0.00
  };

  constructor(private api: SimulationService, private api_noti4: Menu6Service) {
    this.date = new Date();
   }

  ngOnInit() {
    this.api.test().subscribe(d => {
      const values = Object.keys(d.data).map(key => d.data[key]);
      let c = 0;
      values.forEach(a => {
        console.log(a);
        let i = 0;
        const values1 =  Object.keys(a).map(key => a[key]);
        values1.forEach(b => {
          console.log(b.age);
          if (b.type === 'ซากซ้าย' && b.split === 1) {
            this.n.n1 ++ ;
            this.w.w1 += Number(b.weight);
          } else if (b.type === 'ซากขวา' && b.split === 1) {
            this.n.n2 ++ ;
            this.w.w2 += Number(b.weight);
          } else if (b.type === 'ซากซ้ายบน' && b.split === 1) {
            this.n.n3 ++ ;
            this.w.w3 += Number(b.weight);
          } else if (b.type === 'ซากซ้ายล่าง' && b.split === 1) {
            this.n.n4 ++ ;
            this.w.w4 += Number(b.weight);
          } else if (b.type === 'ซากขวาบน' && b.split === 1) {
            this.n.n5 ++ ;
            this.w.w5 += Number(b.weight);
          } else if (b.type === 'ซากขวาล่าง' && b.split === 1) {
            this.n.n6 ++ ;
            this.w.w6 += Number(b.weight);
          } else if (b.type === 'เนื้อน่อง' && b.split === 1) {
            this.n.n7 ++ ;
            this.w.w7 += Number(b.weight);
          } else if (b.type === 'เนื้อสะโพกนอก' && b.split === 1) {
            this.n.n8 ++ ;
            this.w.w8 += Number(b.weight);
          } else if (b.type === 'เนื้อลูกมะพร้าว' && b.split === 1) {
            this.n.n9 ++ ;
            this.w.w9 += Number(b.weight);
          } else if (b.type === 'เนื้อทีโบน' && b.split === 1) {
            this.n.n10 ++ ;
            this.w.w10 += Number(b.weight);
          } else if (b.type === 'เนื้อสันสะโพก' && b.split === 1) {
            this.n.n11 ++ ;
            this.w.w11 += Number(b.weight);
          } else if (b.type === 'เนื้อหางสันสะโพก' && b.split === 1) {
            this.n.n12 ++ ;
            this.w.w12 += Number(b.weight);
          } else if (b.type === 'เนื้อสันนอก' && b.split === 1) {
            this.n.n13 ++ ;
            this.w.w13 += Number(b.weight);
          } else if (b.type === 'เนื้อใบบัวสเต๊ก' && b.split === 1) {
            this.n.n14 ++ ;
            this.w.w14 += Number(b.weight);
          } else if (b.type === 'เนื้อสะโพกใน' && b.split === 1) {
            this.n.n15 ++ ;
            this.w.w15 += Number(b.weight);
          } else if (b.type === 'เนื้อสันใน' && b.split === 1) {
            this.n.n16 ++ ;
            this.w.w16 += Number(b.weight);
          } else if (b.type === 'เนื้อสันกลางถอดกระดูก' && b.split === 1) {
            this.n.n17 ++ ;
            this.w.w17 += Number(b.weight);
          } else if (b.type === 'เนื้อซี่โครงติดกระดูก' && b.split === 1) {
            this.n.n18 ++ ;
            this.w.w18 += Number(b.weight);
          } else if (b.type === 'เนื้อใบพาย' && b.split === 1) {
            this.n.n19 ++ ;
            this.w.w19 += Number(b.weight);
          } else if (b.type === 'เนื้อปลาช่อน' && b.split === 1) {
            this.n.n20 ++ ;
            this.w.w20 += Number(b.weight);
          } else if (b.type === 'เนื้อเสือร้องไห้' && b.split === 1) {
            this.n.n21 ++ ;
            this.w.w21 += Number(b.weight);
          } else if (b.type === 'เนื้อรักบี้' && b.split === 1) {
            this.n.n22 ++ ;
            this.w.w22 += Number(b.weight);
          } else if (b.type === 'เนื้อสันไหล่' && b.split === 1) {
            this.n.n23 ++ ;
            this.w.w23 += Number(b.weight);
          } else if (b.type === 'เครื่องใน' && b.split === 1) {
            this.n.n24 ++ ;
            this.w.w24 += Number(b.weight);
          } else if (b.type === 'หัว' && b.split === 1) {
            this.n.n25 ++ ;
            this.w.w25 += Number(b.weight);
          } else if (b.type === 'หาง' && b.split === 1) {
            this.n.n26 ++ ;
            this.w.w26 += Number(b.weight);
          } else if (b.type === 'หนัง' && b.split === 1) {
            this.n.n27 ++ ;
            this.w.w27 += Number(b.weight);
          } else if (b.type === 'ขา' && b.split === 1) {
            this.n.n28 ++ ;
            this.w.w28 += Number(b.weight);
          } else if (b.type === 'ไขมัน' && b.split === 1) {
            this.n.n29 ++ ;
            this.w.w29 += Number(b.weight);
          } else if (b.type === 'อองเร' && b.split === 1) {
            this.n.n30 ++ ;
            this.w.w30 += Number(b.weight);
          }
         if (i === 0) {
          this.data.push(b);
          this.data[c].counts = Object.values(a).length;
          i ++;
         }
       });
       c ++;
       i = 0 ;
      });
    });
    // this.api.showST1(0).subscribe(data => {
    //   if (data !== null) {
    //     this.count = Object.values(data).length;        /* นับจำนวนรายการทั้งหมดในตาราง */
    //     this.data = Object.values(data);                /* Qurey ข้อมูล */
    //     for (let i = 0; i < Object.values(data).length; i++) {
    //       this.data[i].key = Object.keys(data)[i];
    //       this.keyUpdate.push(Object.keys(data)[i]);
    //     }
    //   } else {
    //     this.data = [];
    //   }
    // });
    console.log(this.w);
  }

  model_detail(q) {
    console.log(q);
    this.numdata = q;
      this.api.showST1(q).subscribe(data => {
      if (data !== null) {
        this.count = Object.values(data).length;        /* นับจำนวนรายการทั้งหมดในตาราง */
        this.show = Object.values(data);                /* Qurey ข้อมูล */
        for (let i = 0; i < Object.values(data).length; i++) {
          this.show[i].key = Object.keys(data)[i];
          this.show[i].num = q;
          this.keyUp.push(Object.keys(data)[i]);
        }
      } else {
        this.data = [];
      }
    });
  }
  updateSplit() {
    console.log(this.numdata, this.keyUp);
    this.api.updateST1(this.numdata, this.keyUp).subscribe();
    this.ngOnInit();
    swal({
      title: 'สำเร็จ!',
      text: 'จัดเก็บข้อมูลเข้าคลังสำเร็จ!',
      type: 'success',
      confirmButtonText: 'ปิด'
    });
    document.getElementById('openModalButton').click();
  }

  deleteList(num, key) {
    console.log(num, key);
    swal({
      title: 'ยืนยัน!',
      text: 'ต้องการลบข้อมูลนี้หรือไม่?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'กลับ'
    }).then((result) => {
      if (result.value) {
        this.api_noti4.removeNotification_T4(num, key).subscribe();
        this.model_detail(num);     /* เข้าฟังก์ชันเพื่อลบแบบทันที */
        swal({
          title: 'สำเร็จ!',
          text: 'ลบข้อมูลสำเร็จ!',
          type: 'success',
          confirmButtonText: 'ปิด'
        });
      }
    });
  }
}
