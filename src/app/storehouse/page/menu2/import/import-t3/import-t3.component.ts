import { Component, OnInit } from '@angular/core';
import { Menu2Service } from '../../menu2.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-import-t3',
  templateUrl: './import-t3.component.html',
  styleUrls: ['./import-t3.component.css']
})
export class ImportT3Component implements OnInit {
  count = 0;
  datas: any = [];
  check = 3;
  weight_all = 0;
  detailFilter = [];

  start = '';
  end =  '';
  startvalue: any = '';
  endvalue: any = '';
  constructor(private api: Menu2Service) { }

  ngOnInit() {
      this.api.showHistory_Import().subscribe(data => {
      const a = Object.keys(data).map(key => data[key]);       /* Qurey ข้อมูล */
      for (let i = 0; i < a.length; i++) {
        if (a[i].type === 'ซากซ้ายบน' || a[i].type === 'ซากซ้ายล่าง' ||
         a[i].type === 'ซากขวาบน' || a[i].type === 'ซากขวาล่าง') {
          this.datas.push(a[i]);
          // this.datas[i].key = Object.keys(data)[i];
          this.count++;
          console.log(this.count);
          this.detailFilter.push(a[i]);
        }
      }
    });
  }

  dropdown_search(v) {       /* เลือกประเภทการ search */
    console.log(v.value);
    if (v.value === '1') {
      this.check = 3;
    } else if (v.value === '2') {
      this.check = 13;
    } else if (v.value === '3') {
      this.check = 5;
    } else if (v.value === '4') {
      this.check = 6;
    } else if (v.value === '5') {
      this.check = 7;
    } else if (v.value === '6') {
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

  filter_1(e1) {
    this.datas = [];
    this.count = 0;
    console.log(e1.value);
    if (e1.value === 'ทั้งหมด') {
      this.datas = this.detailFilter;
      this.count = this.detailFilter.length;
    } else {
      this.detailFilter.forEach( a => {
        if (a.type === e1.value) {
          this.datas.push(a);
          this.count ++;
        }
      });
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
    firebase.database().ref().child('/store/menu2/import').orderByChild('date').startAt(Number(this.startvalue)).endAt(Number(this.endvalue)).once('value', data => {
      if (data.val() != null) {
        this.datas = Object.keys(data.val()).map(key => data.val()[key]);
        for (let i = 0 ; i < data.val().length ; i++) {
          this.datas[i].key = Object.keys(data.val());
        }
        console.log(this.datas);
      } else {
        this.datas = [];
      }

    });
  }
}
