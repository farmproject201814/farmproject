import { Component, OnInit } from '@angular/core';
import { Menu3Service } from './menu3/menu3.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  date;
  day;
  day_thai;
  month;
  month_thai;
  year;
  time;

  count9;
  constructor(private api_menu3: Menu3Service) {
    this.date = new Date();
    this.day = new Array ('อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์');
    this.month = new Array ('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', ' พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
    this.day_thai = this.day[this.date.getDay()];
    this.day = this.date.getDate();
    this.month_thai = this.month[this.date.getMonth()];
    this.year = this.date.getFullYear() + 543;
    this.time = this.date.getTime();
   }

  ngOnInit() {
    this.api_menu3.showHistory_Order().subscribe(data => {
      const a = Object.keys(data).map(key => data[key]);       /* Qurey ข้อมูล */
      for (let i = 0; i < a.length; i++) {
        this.count9 = a.length;
      }
    });
  }
}
