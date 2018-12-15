import { Component, OnInit } from '@angular/core';
import { Menu3Service } from '../../menu3.service';

@Component({
  selector: 'app-order-t5',
  templateUrl: './order-t5.component.html',
  styleUrls: ['./order-t5.component.css']
})
export class OrderT5Component implements OnInit {
  count = 0;
  datas: any = [];
  check = 12;
  weight_all = 0;
  detailFilter = [];
  constructor(private api: Menu3Service) { }

  ngOnInit() {
      this.api.showHistory_Order().subscribe(data => {
      const a = Object.keys(data).map(key => data[key]);       /* Qurey ข้อมูล */
      for (let i = 0; i < a.length; i++) {
        if (a[i].type === 'เครื่องใน' || a[i].type === 'หัว' || a[i].type === 'หนัง'
        || a[i].type === 'หาง' || a[i].type === 'ขา' || a[i].type === 'ไขมัน' || a[i].type === 'อองเร') {
          this.datas.push(a[i]);
          // this.datas[i].key = Object.keys(data)[i];
          this.count++;
          this.detailFilter.push(a[i]);
        }
      }
    });
  }

  dropdown_search(v) {       /* เลือกประเภทการ search */
    console.log(v.value);
    if (v.value === '1') {
      this.check = 12;
    } else if (v.value === '2') {
      this.check = 13;
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
}
