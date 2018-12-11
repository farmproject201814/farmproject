import { Component, OnInit } from '@angular/core';
import { Menu3Service } from '../../menu3.service';

@Component({
  selector: 'app-order-t5',
  templateUrl: './order-t5.component.html',
  styleUrls: ['./order-t5.component.css']
})
export class OrderT5Component implements OnInit {
  count;
  data: any;

  constructor(private api: Menu3Service) { }

  ngOnInit() {
    this.api.showOrderT5().subscribe(data => {
      this.count = Object.values(data).length;        /* นับจำนวนรายการทั้งหมดในตาราง */
      this.data = Object.values(data);                /* Qurey ข้อมูล */
      for (let i = 0; i < Object.values(data).length; i++) {
        this.data[i].key = Object.keys(data)[i];
      }
    });
  }

}
