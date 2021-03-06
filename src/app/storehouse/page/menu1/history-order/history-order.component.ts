import { Component, OnInit } from '@angular/core';
import { Menu1Service } from '../menu1.service';
import * as firebase from 'firebase';
import { Menu4Service } from '../../menu4/menu4.service';

@Component({
  selector: 'app-history-order',
  templateUrl: './history-order.component.html',
  styleUrls: ['./history-order.component.css']
})
export class HistoryOrderComponent implements OnInit {
  count = 0;
  date;
  name: any;
  aging_length;
  check = 11;
  weight_all = 0;
  detailData: any = [];
  detailFilter = [];
  datas: any = [];
  start = '';
  end = '';
  startvalue: any = '';
  endvalue: any = '';
  bykey = [];
  bykey2 = [];
  data_to_history = [];

  constructor(private api: Menu1Service, private api_menu4: Menu4Service) { }

  ngOnInit() {
    this.start = '';
    this.end = '';
    this.count = 0;
    this.weight_all = 0;
    this.datas = [];
    this.bykey = [];
    this.bykey2 = [];
    this.api.showAging().subscribe(data => {
      let c = 0;
      console.log(data);
      const a2 = Object.keys(data).map(key => data[key]);       /* Qurey ข้อมูล */
      for (let i = 0; i < a2.length; i++) {
        console.log('*******' + a2);
        console.log(a2);
        if (a2[i].status !== 'เชือดแล้ว') {
          this.datas.push(a2[i]);
          this.datas[c].key = Object.keys(data)[i];
          this.weight_all += Number(a2[i].weight);
          this.detailFilter.push(a2[i]);

          const o = new Date();
          console.log(o.getTime());
          this.aging_length = Math.round((o.getTime() - a2[i].date) / (1000 * 3600 * 24));
          console.log('kkkk');
          console.log('lenght:' + this.aging_length);
          this.datas[c].day_aging = this.aging_length;

          const a_start = new Date();
          const diffDay = Math.round((a2[i].date_aging - a_start.getTime()) / (1000 * 3600 * 24));
          console.log('aaa: ' + diffDay);
          this.count++;
          c++;
          console.log('ppp: ' + a2[i].status);
          if (diffDay <= 0 && a2[i].status === 'กำลังบ่ม') {
            console.log(a2[i].cow_code);
            console.log(diffDay);
            this.bykey.push(Object.keys(data)[i]);
            this.api.updateStatus_to_store(a2[i].cow_code).subscribe(d6 => {
              this.bykey2.push(Object.keys(d6));
              const d = new Date(a2[i].date_aging);
              a2[i].save_date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
              this.data_to_history.push(a2[i]);
              console.log(d6);

            });
          }
          document.getElementById('w').innerHTML =
            this.weight_all.toFixed(2);
        }
      }
      if (this.bykey.length !== 0) {
        this.api.update_status_complete(this.bykey).subscribe(d9 => {
          if (d9.status === 'OK') {
            this.api.update_status_complete2(this.bykey2).subscribe(h => {
              if (h.status === 'OK') {
                this.api.history_notification_t3(this.data_to_history).subscribe();
              }
            });
          }
        });
      }
    });
    const y = [];
    console.log('aaaaa');
    console.log(this.bykey);
  }

  filter_type(e1) {
    this.datas = [];
    this.count = 0;
    this.weight_all = 0;
    console.log(e1.value);
    if (e1.value === 'ทั้งหมด') {
      this.datas = this.detailFilter;
      this.count = this.detailFilter.length;
      this.detailFilter.forEach(a => {
        this.weight_all += Number(a.weight);
      });
    } else {
      this.detailFilter.forEach(a => {
        if (a.type === e1.value) {
          console.log(a.weight);
          this.datas.push(a);
          this.count++;
          this.weight_all += Number(a.weight);
        }
      });
    }
    document.getElementById('w').innerHTML =
      this.weight_all.toFixed(2);
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
    firebase.database().ref().child('/store/menu1/aging').orderByChild('date_aging').startAt(Number(this.startvalue)).endAt(Number(this.endvalue)).once('value', data => {
      this.datas = [];
      console.log('kkk');
      console.log(data.val());
      if (data.val() != null) {
        const a2 = Object.keys(data.val()).map(k => data.val()[k]);
        console.log(a2);
        for (let i = 0; i < a2.length; i++) {
          console.log('bbb');
          console.log(a2[i]);
          if (a2[i].status !== 'เชือดแล้ว' && (a2[i].type === 'ซากซ้าย' || a2[i].type === 'ซากขวา')) {
            this.datas.push(a2[i]);
            // this.datas[this.count].key = O bject.keys(data.val())[i];
            this.weight_all += Number(a2[i].weight);
            this.count++;
            this.detailFilter.push(a2[i]);
            console.log('aaa');
            console.log(this.weight_all);
            const o = new Date();
            console.log(o.getTime());
            this.aging_length = Math.round((o.getTime() - a2[i].date) / (1000 * 3600 * 24));
            console.log('kkkk');
            console.log('lenght:' + this.aging_length);
            this.datas[i].day_aging = this.aging_length;
          }
        }
        document.getElementById('w').innerHTML =
          this.weight_all.toFixed(2);
      }
      //  else {
      //   this.datas = [];
      //   this.count = 0;
      //   this.weight_all = 0;
      //   this.detailFilter = [];
      //   document.getElementById('w').innerHTML =
      //   this.weight_all.toFixed(2);
      //   }

    });
  }

  // searchDate() {

  //   console.log(this.startvalue);
  //   console.log(this.endvalue);
  //   firebase.database().ref().child('/store/menu1/aging').orderByChild('date')
  // .startAt(Number(this.startvalue)).endAt(Number(this.endvalue)).once('value', data => {
  //     if (data.val() != null) {
  //       this.datas = Object.keys(data.val()).map(key => data.val()[key]);
  //       for (let i = 0 ; i < data.val().length ; i++) {
  //         this.datas[i].key = Object.keys(data.val());
  //       }
  //       console.log(this.datas);
  //     } else {
  //       this.datas = [];
  //     }

  //   });
  // }
}
