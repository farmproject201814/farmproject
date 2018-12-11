import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../simulation.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-simulation-t1',
  templateUrl: './simulation-t1.component.html',
  styleUrls: ['./simulation-t1.component.css']
})
export class SimulationT1Component implements OnInit {
  count;
  data: any;
  key;
  keyUpdate: any = [];
  date;
  constructor(private api: SimulationService) {
    this.date = new Date();
   }

  ngOnInit() {
  }

  addDataST1(a: NgForm) {
    console.log(a.value);
    if ((a.value.aaa !== '') && (a.value.bbb !== '')) {
     // this.api.addST1(a.value).subscribe();
      this.ngOnInit();
    } else {
      swal({
        title: 'ผิดพลาด!',
        text: 'เพิ่มข้อมูลไม่สำเร็จ กรุณากรอกข้อมูลให้ครบถ้วน',
        type: 'error',
        confirmButtonText: 'ปิด',
      });
    }
  }

  removeData(k) {
    console.log(k);
    this.api.removeST1(k).subscribe();
    this.ngOnInit();
  }

  sendData() {
    console.log(this.keyUpdate);
    swal({
      title: 'ยืนยัน!',
      text: 'ต้องการนำเข้าข้อมูลทั้งหมดลงคลังหรือไม่?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'กลับ'
    }).then((result) => {
      if (result.value) {
      //  this.api.updateST1(this.keyUpdate).subscribe();
        this.ngOnInit();
        swal({
          title: 'สำเร็จ!',
          text: 'นำเข้าคลังสำเร็จ!',
          type: 'success',
          confirmButtonText: 'ปิด'
        });
      }
    });
  }

  test2() {
    const toast = swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 5000
    });
    toast({
      type: 'warning',
      title: 'คุณมี 1 การแจ้งเตือน'
    });
  }
}
