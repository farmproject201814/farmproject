import { Component, OnInit } from '@angular/core';
import { Menu1Service } from '../menu1.service';

@Component({
  selector: 'app-history-order',
  templateUrl: './history-order.component.html',
  styleUrls: ['./history-order.component.css']
})
export class HistoryOrderComponent implements OnInit {
  count = 0;
  data: any;
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
  check = 11;
  weight_all = 0;
  detailData: any = [];

  constructor(private api: Menu1Service) { }

  ngOnInit() {
    // this.api.showHistoryOrder().subscribe(data => {
    //   this.count = Object.values(data).length;        /* นับจำนวนรายการทั้งหมดในตาราง */
    //   this.data = Object.values(data);                /* Qurey ข้อมูล */
    //   for (let i = 0; i < Object.values(data).length; i++) {
    //     this.data[i].key = Object.keys(data)[i];
    //   }
    // });
  }

  selectMenu(k) {      /* checkbox ทีละตัว */
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
    console.log(v.value);
    if (v.value === '1') {
      this.check = 11;
    } else if (v.value === '2') {
      this.check = 5;
    } else if (v.value === '3') {
      this.check = 6;
    } else if (v.value === '4') {
      this.check = 7;
    } else if (v.value === '5') {
      this.check = 8;
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
