import { Component, OnInit } from '@angular/core';
import { AboutcattleService } from './../../../../service/API/beefgrading/aboutcattle.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { setRootDomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';

@Component({
  selector: 'app-addcattle',
  templateUrl: './addcattle.component.html',
  styleUrls: ['./addcattle.component.css']
})
export class AddcattleComponent implements OnInit {
  datekill;
  datedry;
  dateready;
  ready;
  data: any;
  items = {
    $key: '',
    id: '',
    left: '',
    right: '',
    datekill: '',
    datedry: '',
    dateready: '',
    wleft: '',
    wright: '',
    roomdry: '',
    firstown: '',
    lastown: '',
    status: '',
    picture: ''
  };

  constructor(private api: AboutcattleService, private router: Router) {
    this.datekill = new Date();
    this.datedry = new Date();
    const day = new Date();
    day.setDate(day.getDate() + 7);
    this.dateready = day;
  }

  ngOnInit() {
    this.api.showData().subscribe(datas => {
      console.log(datas);
      this.data = Object.values(datas);
      for (let i = 0; i < Object.values(datas).length; i++) {
        this.data[i].key = Object.keys(datas)[i];
      }
    });


  }
  add(data: NgForm) {
    console.log(data.value);
    this.api.addData(data.value).subscribe(d1 => {
      console.log(d1);
      if (d1.status === 'OK') {
        this.router.navigate(['/listcattle']);
      }
    });
   this.ngOnInit();
  }

  addForm(d: NgForm) {
    const current = new Date();
    d.value.datekill = current;
    d.value.datedry = current;
    const day = new Date();
    day.setDate(day.getDate() + 7);
    console.log(day);
    d.value.dateready = day;
    console.log(d.value);
    this.api.addDataform(d.value).subscribe(d2 => {
      console.log(d2);
      if (d2.status === 'OK') {
        this.router.navigate(['/listcattle']);
      }
    });
    this.ngOnInit();
  }


  sw_add() {
    swal({
      title: 'บันทึกสำเร็จ!',
      text: '',
      type: 'success'
    });
    // setTimeout(() => location.reload(), 350);
    // this.router.navigate(['/aboutcattle']);
  }
}
