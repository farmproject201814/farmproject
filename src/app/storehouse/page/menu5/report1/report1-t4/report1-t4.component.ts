import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report1-t4',
  templateUrl: './report1-t4.component.html',
  styleUrls: ['./report1-t4.component.css']
})
export class Report1T4Component implements OnInit {
  check = 4;
  constructor() { }

  ngOnInit() {
  }

  selectMenu(v) {
    if ( v.value === '1') {
      this.check = 4;
    } else {
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
