import { Component, OnInit } from '@angular/core';
import { Menu1Service } from '../menu1.service';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { SimulationService } from 'src/app/storehouse/simulation/simulation.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-aging',
  templateUrl: './aging.component.html',
  styleUrls: ['./aging.component.css']
})
export class AgingComponent implements OnInit {
  count = 0;
  data: any = [];
  date;
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
  constructor(private api: Menu1Service, private authAf: AngularFireAuth, private auth: AuthService) {
    this.date = new Date();
   }

  ngOnInit() {
    this.api.showAging().subscribe(data => {
      const a2 = Object.keys(data).map(key => data[key]);       /* Qurey ข้อมูล */
      for (let i = 0; i < a2.length; i++) {
        this.data.push(a2[i]);
        // this.datas[i].key = Object.keys(data)[i];
        this.weight_all += Number(a2[i].weight);
        this.count++;
        this.detailFilter.push(a2[i]);
      }
        document.getElementById('w').innerHTML =
        this.weight_all.toFixed(2);
    });
    // let c = 0;
    // this.api.test().subscribe(d => {
    //   const values = Object.keys(d.data).map(key => d.data[key]);
    //   values.forEach(d1 => {
    //     const s2 = Object.keys(d1).map(key => d1[key]);
    //     for (let i = 0 ; i < s2.length ; i ++ ) {
    //       if (s2[i].split === 1 && s2[i].type === 'ซากซ้าย' || s2[i].type === 'ซากขวา') {
    //         this.detailData.push(s2[i]);
    //         this.detailData[c].key = Object.keys(d1)[i];
    //         this.weight_all += Number(s2[i].weight);
    //         this.count ++;
    //         c++;
    //       }
    //     }
    //     document.getElementById('w').innerHTML =
    //     this.weight_all.toFixed(2);
    //   });
    // });

    this.authAf.authState.subscribe(datas => {          /* แสดงชื่อผู้บ่ม */
      this.auth.showData(datas.email).subscribe(snap => {
        const values = Object.keys(snap).map(key => snap[key]);
        this.name = values[0].fname; /* + ' ' + values[0].lname */
      });
    });
  }

  selectMenu(k) {      /* checkbox ทีละตัว */
    console.log(k);
    console.log(k);
    this.chk = this.selectQuestions.indexOf(k.key);
    if (this.chk >= 0) {
      this.idcheck.splice(this.chk, 1);
      this.selectQuestions.splice(this.chk, 1);
    } else {
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
       this.detailData.forEach( a => {
          this.idcheck.push(a);
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
}
