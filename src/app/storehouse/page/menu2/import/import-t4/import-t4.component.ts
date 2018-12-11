import { Component, OnInit } from '@angular/core';
import { Menu2Service } from '../../menu2.service';

@Component({
  selector: 'app-import-t4',
  templateUrl: './import-t4.component.html',
  styleUrls: ['./import-t4.component.css']
})
export class ImportT4Component implements OnInit {
  count;
  data: any;

  constructor(private api: Menu2Service) { }

  ngOnInit() {
    this.api.showImportT4().subscribe(data => {
      this.count = Object.values(data).length;        /* นับจำนวนรายการทั้งหมดในตาราง */
      this.data = Object.values(data);                /* Qurey ข้อมูล */
      for (let i = 0; i < Object.values(data).length; i++) {
        this.data[i].key = Object.keys(data)[i];
      }
    });
  }

}
