import { Component, OnInit } from '@angular/core';
import { Menu3Service } from '../../menu3.service';

@Component({
  selector: 'app-order-t1',
  templateUrl: './order-t1.component.html',
  styleUrls: ['./order-t1.component.css']
})
export class OrderT1Component implements OnInit {
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
        this.datas.push(a[i]);
        // this.datas[i].key = Object.keys(data)[i];
        this.count++;
        this.detailFilter.push(a[i]);
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
}
