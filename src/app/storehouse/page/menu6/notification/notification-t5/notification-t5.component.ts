import { Component, OnInit } from '@angular/core';
import { Menu6Service } from '../../menu6.service';

@Component({
  selector: 'app-notification-t5',
  templateUrl: './notification-t5.component.html',
  styleUrls: ['./notification-t5.component.css']
})
export class NotificationT5Component implements OnInit {
  num = 0;
  count;
  datas: any = [];
  constructor(private api: Menu6Service) { }

  ngOnInit() {
    this.api.showNotificationT5(this.num).subscribe(data => {
      if (data !== null) {
        const a = Object.keys(data).map(key => data[key]);
        for (let i = 0; i < a.length; i++) {
          this.datas.push(a[i]);
          // this.datas[i].key = Object.keys(data)[i];
          this.count++;
          // this.detailFilter.push(a[i]);
        }
      } else {
        this.datas = [];
      }
    });
  }


}
