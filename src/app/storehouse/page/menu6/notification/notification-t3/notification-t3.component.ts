import { Component, OnInit } from '@angular/core';
import { Menu6Service } from '../../menu6.service';

@Component({
  selector: 'app-notification-t3',
  templateUrl: './notification-t3.component.html',
  styleUrls: ['./notification-t3.component.css']
})
export class NotificationT3Component implements OnInit {
  datas = [];
  datas_m = [];
  constructor(private api: Menu6Service) { }

  ngOnInit() {
    this.api.showNotificationT3().subscribe(data => {
      const let1 = Object.keys(data).map(a => data[a]);
      console.log(data);
      for (let i = 0; i < let1.length ; i++) {
        const let2 = Object.keys(let1[i]).map(a => let1[i][a]);
        this.datas.push({date: Object.keys(data)[i], count: Object.keys(let1[i]).length, data: let2});
        console.log(this.datas);
      }
    });
  }

  onModel(dd) {
    console.log(dd.data);
    this.datas_m = dd.data;
  }
}
