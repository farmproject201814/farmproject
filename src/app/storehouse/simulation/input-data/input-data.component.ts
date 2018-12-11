import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../simulation.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent implements OnInit {
  date;

  constructor(private api: SimulationService) {
    this.date = new Date();
  }

  ngOnInit() {
  }

  /* -------- Menu1 ---------------------------------------------------------------------------- */
  addMenu1Aging(c1: NgForm) {
    console.log(c1.value);
    this.api.addAging(c1.value).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'เพิ่มข้อมูลตารางสำเร็จ',
        type: 'success',
        confirmButtonText: 'ปิด',
      });
  }
  addMenu1HistoryOrder(c2: NgForm) {
    console.log(c2.value);
    this.api.addHistoryOrder(c2.value).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'เพิ่มข้อมูลตารางสำเร็จ',
        type: 'success',
        confirmButtonText: 'ปิด',
      });
  }
  /* -------- Menu2 ---------------------------------------------------------------------------- */
  addMenu2ImportT2(d2: NgForm) {
    console.log(d2.value);
    this.api.addImportT2(d2.value).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'เพิ่มข้อมูลตารางสำเร็จ',
        type: 'success',
        confirmButtonText: 'ปิด',
      });
  }
  addMenu2ImportT3(d3: NgForm) {
    console.log(d3.value);
    this.api.addImportT3(d3.value).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'เพิ่มข้อมูลตารางสำเร็จ',
        type: 'success',
        confirmButtonText: 'ปิด',
      });
  }
  addMenu2ImportT4(d4: NgForm) {
    console.log(d4.value);
    this.api.addImportT4(d4.value).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'เพิ่มข้อมูลตารางสำเร็จ',
        type: 'success',
        confirmButtonText: 'ปิด',
      });
  }
  addMenu2ImportT5(d5: NgForm) {
    console.log(d5.value);
    this.api.addImportT5(d5.value).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'เพิ่มข้อมูลตารางสำเร็จ',
        type: 'success',
        confirmButtonText: 'ปิด',
      });
  }
  /* -------- Menu3 ---------------------------------------------------------------------------- */
  addMenu3OrderT2(e2: NgForm) {
    console.log(e2.value);
    this.api.addOrderT2(e2.value).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'เพิ่มข้อมูลตารางสำเร็จ',
        type: 'success',
        confirmButtonText: 'ปิด',
      });
  }
  addMenu3OrderT3(e3: NgForm) {
    console.log(e3.value);
    this.api.addOrderT3(e3.value).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'เพิ่มข้อมูลตารางสำเร็จ',
        type: 'success',
        confirmButtonText: 'ปิด',
      });
  }
  addMenu3OrderT4(e4: NgForm) {
    console.log(e4.value);
    this.api.addOrderT4(e4.value).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'เพิ่มข้อมูลตารางสำเร็จ',
        type: 'success',
        confirmButtonText: 'ปิด',
      });
  }
  addMenu3OrderT5(e5: NgForm) {
    console.log(e5.value);
    this.api.addOrderT5(e5.value).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'เพิ่มข้อมูลตารางสำเร็จ',
        type: 'success',
        confirmButtonText: 'ปิด',
      });
  }
}
