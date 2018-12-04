import { Component, OnInit } from '@angular/core';
import { AboutcattleService } from './../../../../service/API/beefgrading/aboutcattle.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-addcattle',
  templateUrl: './addcattle.component.html',
  styleUrls: ['./addcattle.component.css']
})
export class AddcattleComponent implements OnInit {

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

  constructor(private api: AboutcattleService) {

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
    this.api.addData(data.value).subscribe();
   this.ngOnInit();
  }

  addForm(d: NgForm) {
    console.log(d.value);
    this.api.addDataform(d.value).subscribe();
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
