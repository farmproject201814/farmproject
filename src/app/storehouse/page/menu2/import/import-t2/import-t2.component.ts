import { Component, OnInit } from '@angular/core';
import { SimulationService } from 'src/app/storehouse/simulation/simulation.service';

@Component({
  selector: 'app-import-t2',
  templateUrl: './import-t2.component.html',
  styleUrls: ['./import-t2.component.css']
})
export class ImportT2Component implements OnInit {
  count = 0;
  data: any;
  check = 3;
  weight_all = 0;
  detailData: any = [];

  constructor(private api: SimulationService) { }

  ngOnInit() {
    let c = 0;
    this.api.test().subscribe(d => {
      const values = Object.keys(d.data).map(key => d.data[key]);
      values.forEach(d1 => {
        const s2 = Object.keys(d1).map(key => d1[key]);
        for (let i = 0 ; i < s2.length ; i ++ ) {
          if (s2[i].split === 1 && s2[i].type === 'ซากซ้าย' || s2[i].type === 'ซากขวา') {
            this.detailData.push(s2[i]);
            this.detailData[c].key = Object.keys(d1)[i];
            this.weight_all += Number(s2[i].weight);
            this.count ++;
            c++;
          }
        }
        // document.getElementById('w').innerHTML =
        // this.weight_all.toFixed(2);
      });
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
}
