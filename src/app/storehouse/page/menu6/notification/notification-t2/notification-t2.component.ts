import { Component, OnInit } from '@angular/core';
import { SimulationService } from 'src/app/storehouse/simulation/simulation.service';

@Component({
  selector: 'app-notification-t2',
  templateUrl: './notification-t2.component.html',
  styleUrls: ['./notification-t2.component.css']
})
export class NotificationT2Component implements OnInit {
  count;
  data: any = [];
  keyUpdate: any = [];
  show;
  keyUp: any = [];
  numdata;

  constructor(private api: SimulationService) { }

  ngOnInit() {
    this.api.test2().subscribe(d => {
      const values = Object.keys(d.data).map(key => d.data[key]);
      let c = 0;
      values.forEach(a => {
        console.log(a);
        let i = 0;
        const values1 =  Object.keys(a).map(key => a[key]);
        values1.forEach(b => {
         if (i === 0) {
          this.data.push(b);
          this.data[c].counts = Object.values(a).length;
          i ++;
         }
       });
       c ++;
       i = 0 ;
      });
    });
  }

  model_detail(q) {
    console.log(q);
    this.numdata = q;
      this.api.showST2(q).subscribe(data => {
      if (data !== null) {
        this.count = Object.values(data).length;        /* นับจำนวนรายการทั้งหมดในตาราง */
        this.show = Object.values(data);                /* Qurey ข้อมูล */
        for (let i = 0; i < Object.values(data).length; i++) {
          this.show[i].key = Object.keys(data)[i];
          this.show[i].num = q;
          this.keyUp.push(Object.keys(data)[i]);
        }
      } else {
        this.data = [];
      }
    });
  }

}
