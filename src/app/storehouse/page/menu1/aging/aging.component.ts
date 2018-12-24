import { Component, OnInit } from '@angular/core';
import { Menu1Service } from '../menu1.service';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from 'src/app/auth.service';
import { SimulationService } from 'src/app/storehouse/simulation/simulation.service';
import * as firebase from 'firebase';
import { Menu4Service } from '../../menu4/menu4.service';
import { Menu7Service } from '../../menu7/menu7.service';

@Component({
  selector: 'app-aging',
  templateUrl: './aging.component.html',
  styleUrls: ['./aging.component.css']
})
export class AgingComponent implements OnInit {
  count = 0;
  datas: any = [];
  date;
  date_aging;
  name: any;
  /*--- ตัวแปรในฟังก์ชัน selectMenu() ---*/
  chk;
  idcheck = [];
  selectQuestions: string[] = [];
  /*--- ตัวแปรในฟังก์ชัน checkAll_list() ---*/
  a = 0;
  c = {
    check : false
  };
  /*--- ตัวแปรในฟังก์ชัน selectMenu() ---*/
  check = 3;
  weight_all = 0;
  detailData: any = [];
  detailFilter = [];
  start = '';
  end =  '';
  startvalue: any = '';
  endvalue: any = '';
  key_store;
  num_date = 7;
  id_member;
  lim_day_aging = [];
  day_aging_sd;

  constructor(private api: Menu1Service, private authAf: AngularFireAuth, private auth: AuthService,
    private api_4: Menu4Service, private api_menu7: Menu7Service) {
    this.date = new Date();
   }

  ngOnInit() {
    this.start = '';
    this.end = '';
    this.count = 0;
    this.weight_all = 0;
    this.datas = [];
    this.idcheck = [];
    this.api.showAging().subscribe(data => {
      const a2 = Object.keys(data).map(key => data[key]);       /* Qurey ข้อมูล */
      for (let i = 0; i < a2.length; i++) {
        console.log('bbb');
        console.log(a2[i]);
        if (a2[i].status === 'เชือดแล้ว' && (a2[i].type === 'ซากซ้าย' || a2[i].type === 'ซากขวา')) {
          this.datas.push(a2[i]);
          this.datas[this.count].key = Object.keys(data)[i];
          this.weight_all += Number(a2[i].weight);
          this.count++;
          this.detailFilter.push(a2[i]);
          console.log('aaa');
          console.log(this.weight_all);

      }
      }
      document.getElementById('w').innerHTML =
      this.weight_all.toFixed(2);
    });

    this.authAf.authState.subscribe(datas => {          /* แสดงชื่อผู้บ่ม */
      this.auth.showData(datas.email).subscribe(snap => {
        const values = Object.keys(snap).map(key => snap[key]);
        this.name = values[0].id_member + ' ' + values[0].fname;
      });
    });

    this.api_4.showStore().subscribe(data => {
      const a = Object.keys(data); /* Qurey ข้อมูล */
      console.log(data);
    });

    this.api_menu7.showSetting_limit_day_Aging().subscribe(data => {        /* แสดงจำนวนลิมิตอายุซากตามที่ตั้งค่า */
      const let4 = Object.keys(data).map(a => data[a]);
      console.log(let4);
      for (let i = 0 ; i < Number(let4[0].limit_day_aging) ; i++) {
        this.lim_day_aging.push(i + 1);
        this.day_aging_sd = let4[0].day_aging_sd;
      }
    });

    this.api_menu7.showSetting_day_aging_Sd().subscribe(data => {        /* แสดงจำนวนลิมิตอายุซากตามที่ตั้งค่า */
      const let5 = Object.keys(data).map(a => data[a]);
      console.log(let5);
        this.day_aging_sd = let5[0].day_aging_sd;
    });
  }

  selectMenu(k) {      /* checkbox ทีละตัว */
    this.chk = this.selectQuestions.indexOf(k.key);
    if (this.chk >= 0) {
      this.idcheck.splice(this.chk, 1);
      this.selectQuestions.splice(this.chk, 1);
    } else {
      const dw = new Date();
      dw.setDate(dw.getDate() + Number(this.num_date));
       k.date_aging = Number(dw);
      this.idcheck.push(k);
      this.selectQuestions.push(k.key);
    }
    console.log(this.idcheck);
  }

  checkAll_list() {        /* checkbox ทั้งหมด */
    console.log(this.a);
    if (this.a === 0) {
       this.c.check = true;
       this.idcheck = [];
       this.datas.forEach( a => {
        const dg = new Date();
        dg.setDate(dg.getDate() + Number(this.num_date));
         a.date_aging = Number(dg);

          this.idcheck.push(a);
          console.log(a);
          this.selectQuestions.push(a.key);
       });
       this.a = 1;
    } else {
      this.c.check = false;
      this.a = 0;
      this.idcheck = [];
      this.selectQuestions = [];
    }
    console.log(this.idcheck);
  }

  dropdown_search(v) {       /* เลือกประเภทการ search */
    if (v.value === '1') {
      this.check = 4;
    } else {
      this.check = 6;
    }
  }

  searchTable() {         /* ช่อง search ตาราง */
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

  startdate(start) {
    this.start = start.value;
    const date1 = new Date(this.start);
    const date2 = new Date(this.end);
    if (this.start === '' || this.end === '') {
      this.start = this.start;
      this.end = this.end;
    } else {
      const timeDiff = date2.getTime() - date1.getTime();
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (diffDays < 0) {
        this.end = this.start;
      }
      console.log(diffDays);

      console.log(this.startvalue);
    }
    this.startvalue = Number(date1);
  }

  enddate(end) {
    this.end = end.value;
    const date3 = new Date(this.start);
    const date4 = new Date(this.end);
    if (this.start === '' || this.end === '') {
      this.start = this.start;
      this.end = this.end;
    } else {

      const timeDiff = date4.getTime() - date3.getTime();
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (diffDays < 0) {
        this.start = this.end;
      }
      console.log(diffDays);

      console.log(this.endvalue);
    }
    this.endvalue = Number(date4);
  }

  searchDate() {

    console.log(this.startvalue);
    console.log(this.endvalue);
    // tslint:disable-next-line:max-line-length
    firebase.database().ref().child('/store/menu1/aging').orderByChild('date').startAt(Number(this.startvalue)).endAt(Number(this.endvalue)).once('value', data => {
      console.log('kkk');
      console.log(data.val());
      const a2 = Object.keys(data.val()).map(key => data[key]);
      for (let i = 0; i < a2.length; i++) {
        console.log('bbb');
        console.log(a2[i]);
        if (a2[i].status === 'เชือดแล้ว' && (a2[i].type === 'ซากซ้าย' || a2[i].type === 'ซากขวา')) {
          this.datas.push(a2[i]);
          this.datas[this.count].key = Object.keys(data.val())[i];
          this.weight_all += Number(a2[i].weight);
          this.count++;
          this.detailFilter.push(a2[i]);
          console.log('aaa');
          console.log(this.weight_all);

      } else {
        this.datas = [];
        this.count = 0;
        this.weight_all = 0;
        this.detailFilter = [];
      }
      }
      document.getElementById('w').innerHTML =
      this.weight_all.toFixed(2);

    });
  }

  sendDate(s) {
    this.num_date = s;
    console.log(s.value);
    const de = new Date();
    de.setDate(de.getDate() + Number(s.value));
    console.log(de);
    for (let i = 0 ; i < this.idcheck.length ; i++) {
      this.idcheck[i].date_aging = Number(de);
    }
  }
  change_status(w) {
    const r = new Date();
    this.date = Number(r);
    const q = [];
     for (let i = 0; i < this.idcheck.length; i++) {
       this.api.updateStatus_to_store(this.idcheck[i].cow_code).subscribe(u => {
         q.push(Object.keys(u)[0]) ;
         console.log(q);

      });
        this.idcheck[i].aging_name = w;
        this.idcheck[i].date = this.date;
     }
     console.log(q);
     setTimeout(() => {
     this.api.updateStatus_to_store2(q).subscribe(d3 => {
       if (d3.status === 'OK') {
        this.api.updateStatus(this.idcheck).subscribe(dd => {
          if (dd.status === 'OK') {
            this.api.updateStatus2(this.idcheck).subscribe(d2 => {
              if (d2.status === 'OK') {
                swal({
                  title: 'สำเร็จ!',
                  text: 'บ่มซากเนื้อโคสำเร็จ',
                  type: 'success',
                  confirmButtonText: 'ตกลง'
                });
                document.getElementById('openModalButton').click();
                this.ngOnInit();
              }
            });
          }
        }
      );
    }
  });
}, 1000);

  }

//   test() {
//     swal({
//       title: 'รอสักครู่',
//       html: 'ระบบกำลังทำรายการ กรุณารอสักครู่',
//       timer: 4000,
//       onBeforeOpen: () => {
//         swal.showLoading();
//       },
//   }).then((result) => {

//   });
// }
}
