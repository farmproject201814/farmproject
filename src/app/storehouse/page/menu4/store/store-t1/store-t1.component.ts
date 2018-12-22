import { Component, OnInit } from '@angular/core';
import { Menu4Service } from '../../menu4.service';
import { Menu7Service } from '../../../menu7/menu7.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from 'src/app/auth.service';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-store-t1',
  templateUrl: './store-t1.component.html',
  styleUrls: ['./store-t1.component.css']
})
export class StoreT1Component implements OnInit {
  count = 0;
  count2 = 0;
  count_weight = 0;
  count_weight_c = 0;
  count_weight2 = 0;
  count_weight_c2 = 0;
  datas: any = [];
  check = 2;
  check2 = 6;
  detailFilter = [];

  room = [];
  class = [];
  bucket = [];
  lim_age = [];
  new_status;
  old_status = [];

  table1 = [];
  table2 = [];
  name;
  date;
  statusUpdate = [];
  take;

  constructor(private api: Menu4Service, private api_menu7: Menu7Service,
    private authAf: AngularFireAuth, private auth: AuthService) {
      this.date = new Date();
  }
  ngOnInit() {
    this.count_weight = 0;
    this.count_weight_c = 0;
    this.count_weight2 = 0;
    this.count_weight_c2 = 0;
    this.count = 0 ;
    this.count2 = 0 ;
    this.room = [];
    this.class = [];
    this.bucket = [];
    this.detailFilter = [];
      this.api.showStore().subscribe(datas => {
        console.log(datas);
        this.table1 = [];
        this.table2 = [];
      const a = Object.keys(datas).map(key => datas[key]);       /* Qurey ข้อมูล */
      for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
        if (Number(a[i].hidden) === 0) {
          this.count_weight += Number(a[i].weight);
          this.count_weight_c += Number(a[i].weight_c);

          this.table1.push(a[i]);
          this.table1[this.count].key = Object.keys(datas)[i];
          this.detailFilter.push(a[i]);

          const day1 = new Date();
          const diff = Math.round((a[i].date - day1.getTime()) / (1000 * 3600 * 24));
          console.log(diff);

          this.table1[this.count].day_store = Math.abs(diff);
          this.count++;
          if (a[i].weight_c === '-') {
            this.count_weight_c = 0;
          }
        } else if (Number(a[i].hidden) === 1) {
          this.count_weight2 += Number(a[i].weight);
          this.count_weight_c2 += Number(a[i].weight_c);
          this.table2.push(a[i]);
          this.table2[this.count2].key = Object.keys(datas)[i];
          this.count2++;
          if (a[i].weight_c === '-') {
            this.count_weight_c2 = 0;
          }

        }
      }
      document.getElementById('w1').innerHTML =
      this.count_weight.toFixed(2);
      document.getElementById('w2').innerHTML =
      this.count_weight_c.toFixed(2);
      document.getElementById('w3').innerHTML =
      this.count_weight2.toFixed(2);
      document.getElementById('w4').innerHTML =
      this.count_weight_c2.toFixed(2);
    });

      this.api_menu7.showSetting_room().subscribe(data => {        /* แสดงจำนวนห้องตามที่ตั้งค่า */
      const let1 = Object.keys(data).map(a => data[a]);
      console.log(let1);
      for (let i = 0 ; i < Number(let1[0].s_room) ; i++) {
        this.room.push(i + 1);
      }
    });
      this.api_menu7.showSetting_class().subscribe(data => {        /* แสดงจำนวนชั้นตามที่ตั้งค่า */
      const let2 = Object.keys(data).map(a => data[a]);
      console.log(let2);
      for (let i = 0 ; i < Number(let2[0].s_class) ; i++) {
        this.class.push(i + 1);
      }
    });
      this.api_menu7.showSetting_bucket().subscribe(data => {        /* แสดงจำนวนตะกร้าตามที่ตั้งค่า */
      const let3 = Object.keys(data).map(a => data[a]);
      console.log(let3);
      for (let i = 0 ; i < Number(let3[0].s_bucket) ; i++) {
        this.bucket.push(i + 1);
      }
    });
      this.api_menu7.showSetting_limitAge().subscribe(data => {        /* แสดงจำนวนลิมิตอายุซากตามที่ตั้งค่า */
      const let4 = Object.keys(data).map(a => data[a]);
      console.log(let4);
      for (let i = 0 ; i < Number(let4[0].limit_age) ; i++) {
        this.lim_age.push(i + 1);
      }
    });

    this.authAf.authState.subscribe(datas => {          /* แสดงชื่อผู้เบิกออก */
      this.auth.showData(datas.email).subscribe(snap => {
        const values = Object.keys(snap).map(key => snap[key]);
        this.name = values[0].id_member + ' ' + values[0].fname;
      });
    });
    console.log(this.date);

  }

  filter_type(e1) {
    this.table1 = [];
    this.count = 0;
    this.count_weight = 0;
    this.count_weight_c = 0;
    console.log(e1.value);
    if (e1.value === 'ทั้งหมด') {
      this.table1 = this.detailFilter;
      this.count = this.detailFilter.length;
      this.detailFilter.forEach( a => {
      this.count_weight += Number(a.weight);
      this.count_weight_c += Number(a.weight_c);

      });
    } else {
      this.detailFilter.forEach(a => {
        if (a.type === e1.value) {
          console.log(a.weight);
          this.count_weight += Number(a.weight);
          this.count_weight_c += Number(a.weight_c);
          console.log(this.count_weight);
          this.table1.push(a);
          this.count ++;
        }
      });
    }
    console.log(this.count_weight);
  }

  dropdown_search(v) {
    console.log(v.value);
    if (v.value === '1') {
      this.check = 2;
    } else if (v.value === '2') {
      this.check = 3;
    } else if (v.value === '3') {
      this.check = 4;
    } else if (v.value === '4') {
      this.check = 5;
    } else if (v.value === '5') {
      this.check = 6;
    } else if (v.value === '6') {
      this.check = 7;
    }
  }

  searchTable() {
    let input, filter, table, tr, td, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('tables');
    tr = table.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[this.check];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }

  dropdown_search2(v2) {       /* เลือกประเภทการ search */
    console.log(v2.value);
    if (v2.value === '1') {
      this.check2 = 6;
    } else if (v2.value === '2') {
      this.check2 = 7;
    }
  }

  searchTable2() {
    let input2, filter, table, tr, td, i;
    input2 = document.getElementById('myInput2');
    filter = input2.value.toUpperCase();
    table = document.getElementById('tables');
    tr = table.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[this.check2];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }

  filter_age(a1) {
    this.table1 = [];
    this.count = 0;
    console.log(a1.value);
    if (a1.value === 'ทั้งหมด') {
      this.table1 = this.detailFilter;
      this.count = this.detailFilter.length;
    } else {
      this.detailFilter.forEach( a => {
        if (a.age === a1.value) {
          this.table1.push(a);
          this.count ++;
        }
      });
    }
  }

  filter_grade(g1) {
    this.table1 = [];
    this.count = 0;
    console.log(g1.value);
    if (g1.value === 'ทั้งหมด') {
      this.table1 = this.detailFilter;
      this.count = this.detailFilter.length;
    } else {
      this.detailFilter.forEach( a => {
        if (a.grade === g1.value) {
          this.table1.push(a);
          this.count ++;
        }
      });
    }
  }

  filter_room(f1) {
    this.table1 = [];
    this.count = 0;
    console.log(f1.value);
    if (f1.value === 'ทั้งหมด') {
      this.table1 = this.detailFilter;
      this.count = this.detailFilter.length;
    } else {
      this.detailFilter.forEach( a => {
        if (a.room === f1.value) {
          this.table1.push(a);
          this.count ++;
        }
      });
    }
  }
  filter_class(f2) {
    this.table1 = [];
    this.count = 0;
    console.log(f2.value);
    if (f2.value === 'ทั้งหมด') {
      this.table1 = this.detailFilter;
      this.count = this.detailFilter.length;
    } else {
      this.detailFilter.forEach( a => {
        if (a.class === f2.value) {
          this.table1.push(a);
          this.count ++;
        }
      });
    }
  }
  filter_bucket(f3) {
    this.table1 = [];
    this.count = 0;
    console.log(f3.value);
    if (f3.value === 'ทั้งหมด') {
      this.table1 = this.detailFilter;
      this.count = this.detailFilter.length;
    } else {
      this.detailFilter.forEach( a => {
        if (a.bucket === f3.value) {
          this.table1.push(a);
          this.count ++;
        }
      });
    }
  }

  filter_status(s1) {
    this.table1 = [];
    this.count = 0;
    console.log(s1.value);
    if (s1.value === 'ทั้งหมด') {
      this.table1 = this.detailFilter;
      this.count = this.detailFilter.length;
    } else {
      this.detailFilter.forEach( a => {
        if (a.status === s1.value) {
          this.table1.push(a);
          this.count ++;
        }
      });
    }
  }

  filter_litmit_age(s4) {
    this.table1 = [];
    this.count = 0;
    console.log(s4.value);
    if (s4.value === 'ทั้งหมด') {
      this.table1 = this.detailFilter;
      this.count = this.detailFilter.length;
    } else {
      this.detailFilter.forEach( a => {
        if (a.age === s4.value) {
          this.table1.push(a);
          this.count ++;
        }
      });
    }
  }

  update_hidden1(key) {
    console.log(key);
    this.api.showStore().subscribe(datas => {
      const a = Object.keys(datas).map(keys => datas[keys]);
      for (let i = 0; i < a.length; i++) {
        if (a[i].status === 'กำลังบ่ม') {
          console.log('aaaaa');
          console.log(a[i]);
          // swal({
          //   title: 'ผิดพลาด!',
          //   text: 'ไมสามารถเบิกได้ เนื่องจากรายการนี้กำลังบ่มอยู่!',
          //   type: 'error',
          //   confirmButtonText: 'ตกลง'
          // });
        }
      }
    });
    // this.api.updateHidden1(key).subscribe(d => {
    //   if (d.status === 'OK') {
    //     this.ngOnInit();
    //   }
    // });
  }
  update_hidden0(key) {
    console.log(key);
    this.api.updateHidden0(key).subscribe(d => {
      if (d.status === 'OK') {
        this.ngOnInit();
      }
    });
  }

  changeStatus(c_data, c, i) {              /* เลือกสถานะเพื่อเบิกออก */
    console.log(c_data.key, c.value, i);
    // this.old_status[i] = c_data;
    // this.old_status[i].status = c.value;
    // console.log(this.old_status);
    this.statusUpdate[i] = c_data;
    this.statusUpdate[i].key = c_data.key;
    this.statusUpdate[i].status = c.value;
    console.log(this.statusUpdate);
  }

  updateData(w1, w2, w3) {                  /* บันทึกการเบิกออกและเปลี่ยนสถานะในคลัง */
    console.log(w1, w2, w3);
    this.date = new Date();
    for (let i = 0; i < this.statusUpdate.length ; i++) {
      this.statusUpdate[i].order_name = w1;
      this.statusUpdate[i].date = Number(this.date);
      this.statusUpdate[i].take_name = this.take;
    }
    console.log(w3);
    this.api.updateNewStatus(this.statusUpdate).subscribe(d => {
      console.log(d);
      if (d.status === 'OK') {
        this.api.copyToOrder(this.statusUpdate).subscribe(d1 => {
          console.log(d1);
          if (d1.status === 'OK') {
            this.api.copyToNotificationT5_copy(this.statusUpdate).subscribe(d2 => {
              console.log(d2);
              if (d2.status === 'OK') {
                swal({
                  title: 'สำเร็จ!',
                  text: 'จัดเก็บข้อมูลเข้าคลังสำเร็จ!',
                  type: 'success',
                  confirmButtonText: 'ตกลง'
                });
                document.getElementById('openModalButton').click();
                  this.ngOnInit();
              }
            });
          }
        });
      }
    });
  }

  test(text) {          /* เก็บชือผู้ขอเบิกแล้วโยนเข้าฟังก์ชัน updateData */
    console.log(text);
    this.take = text;
  }
}
