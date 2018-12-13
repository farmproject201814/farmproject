import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-order-t1',
  templateUrl: './order-t1.component.html',
  styleUrls: ['./order-t1.component.css']
})
export class OrderT1Component implements OnInit {
  itemList: AngularFireList<any>;
  itemArray = [];
  items;
  countList;
  date;
  /*--- ตัวแปรในฟังก์ชัน checklist() ---*/
  chk;
  idcheck = [];
  selectQuestions: string[] = [];
  /*--- ตัวแปรในฟังก์ชัน checkAll_list() ---*/
  a = 0;
  c = {
    check : false
  };
  /*--- ตัวแปรในฟังก์ชัน selectMenu() ---*/
  check = 4;

  constructor(public db: AngularFireDatabase) {
    this.date = new Date();
    this.itemArray = [];
    this.itemList = db.list('/menu1-1');

    this.itemList.snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        const y  = action.payload.toJSON();
        y['key'] = action.key;
        this.itemArray.push(y as ListItemClass);
      });
    });
    /* นับจำนวนรายการ */
    this.items = db.list('/menu1-1').valueChanges().subscribe(items => {
      this.countList = items.length;
    });
  }

  ngOnInit() {
  }

  checkList(k) {      /* checkbox ทีละตัว */
    this.chk = this.selectQuestions.indexOf(k);
    if (this.chk >= 0) {
      this.idcheck.splice(this.chk, 1);
      this.selectQuestions.splice(this.chk, 1);
    } else {
      this.idcheck.push(k);
      this.selectQuestions.push(k);
    }
    console.log(this.idcheck);
  }

  checkAll_list() {        /* checkbox ทั้งหมด */
    if (this.a === 0) {
       this.c.check = true;
       this.a = 1;
       this.idcheck = [];
       this.itemArray.forEach( a => {
          this.idcheck.push(a.key);
          this.selectQuestions.push(a.key);
       });
       console.log(this.idcheck);
    } else {
      this.c.check = false;
      this.a = 0;
      this.idcheck = [];
      this.selectQuestions = [];
      console.log(this.idcheck);
    }
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

  filterDd(f) {         /* search หาแบบ dropdown */
    console.log(f.value);
    this.itemArray = [];
    if (f.value !== '0') {
      console.log('xxxx');
      this.itemList = this.db.list('/menu1-1' , ref => ref.orderByChild('room').equalTo(f.value));

      this.itemList.snapshotChanges().subscribe(actions => {
        actions.forEach(action => {
          const y  = action.payload.toJSON();
          y['key'] = action.key;
          this.itemArray.push(y as ListItemClass);
        });
      });
    } else {
      this.itemList = this.db.list('/menu1-1');
      this.itemList.snapshotChanges().subscribe(actions => {
        actions.forEach(action => {
          const y  = action.payload.toJSON();
          y['key'] = action.key;
          this.itemArray.push(y as ListItemClass);
        });
      });
    }
  }
}
export class ListItemClass {
  code1: string;
  name1: string;
  barcode1: string;
  weight1: string;
  code2: string;
  name2: string;
  barcode2: string;
  weight2: string;
  room: string;
}
