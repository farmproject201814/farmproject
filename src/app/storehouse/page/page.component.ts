import { Component, OnInit } from '@angular/core';
import { Menu3Service } from './menu3/menu3.service';
import { Menu2Service } from './menu2/menu2.service';
import swal from 'sweetalert2';
import { Menu6Service } from './menu6/menu6.service';
import { SimulationService } from '../simulation/simulation.service';
import { Menu4Service } from './menu4/menu4.service';

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

  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;
  count5 = 0;
  count6 = 0;
  count7 = 0;
  count8 = 0;
  count9 = 0;
  count10 = 0;

  constructor(private api_menu2: Menu2Service, private api_menu3: Menu3Service, private api_menu6: Menu6Service,
    private api_simulation: SimulationService, private api_menu4: Menu4Service) {
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
    // this.api_menu6.showNotificationT5().subscribe(data => {
    //   const a = Object.keys(data).map(key => data[key]);
    //   for (let i = 0; i < a.length; i++) {
    //     this.count10 = a.length;
    //   }
    // });

    this.api_simulation.countNum_dashboard().subscribe(d => {
      const value = Object.keys(d);
      console.log(value);
      for (let i = 0; i < value.length ; i++) {
        this.count9 += Object.keys(d[value[i]]).length;
      }
    });

    this.api_simulation.countNum_dashboard().subscribe(d => {
      const value = Object.keys(d);
      console.log(value);
      for (let i = 0; i < value.length ; i++) {
        this.count9 += Object.keys(d[value[i]]).length;
      }
    });

    this.api_simulation.test2().subscribe(d => {
      const values = Object.keys(d.data).map(key => d.data[key]);
      values.forEach(a => {
        console.log(a);
        let i = 0;
        const values1 =  Object.keys(a).map(key => a[key]);
        values1.forEach(b => {
         if (i === 0) {
          this.count8 = Object.values(a).length;
          i ++;
         }
       });
       i = 0 ;
      });
    });

    this.api_menu4.showStore().subscribe(data => {
      const a = Object.keys(data).map(key => data[key]);
      for (let i = 0; i < a.length; i++) {
        if (a[i].type === 'ซากซ้าย' || a[i].type === 'ซากขวา') {
          this.count1++;
        } else if (a[i].type === 'ซากซ้ายบน' || a[i].type === 'ซากซ้ายล่าง' ||
        a[i].type === 'ซากขวาบน' || a[i].type === 'ซากขวาล่าง') {
          this.count2++;
        } else if (a[i].type !== 'ซากซ้าย' && a[i].type !== 'ซากขวา' && a[i].type !== 'ซากซ้ายบน'
        && a[i].type !== 'ซากซ้ายล่าง' && a[i].type !== 'ซากขวาบน' && a[i].type !== 'ซากขวาล่าง'
        && a[i].type !== 'เครื่องใน' && a[i].type !== 'หัว' && a[i].type !== 'หนัง'
        && a[i].type !== 'หาง' && a[i].type !== 'ขา' && a[i].type !== 'ไขมัน' && a[i].type !== 'อองเร') {
          this.count3++;
        } else if (a[i].type === 'เครื่องใน' || a[i].type === 'หัว' || a[i].type === 'หนัง'
        || a[i].type === 'หาง' || a[i].type === 'ขา' || a[i].type === 'ไขมัน' || a[i].type === 'อองเร') {
          this.count4++;
        }
      }
    });
  }
}
