import { Component, OnInit } from '@angular/core';
import { Menu6Service } from '../../menu6.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from 'src/app/auth.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import * as firebase from 'firebase';

@Component({
  selector: 'app-notification-t1',
  templateUrl: './notification-t1.component.html',
  styleUrls: ['./notification-t1.component.css']
})
export class NotificationT1Component implements OnInit {
  datas: any = [];
  datass: any = [];
  datas_m = [];
  name;
  data_import: any = [];
  today;
  countReport = 0;
  count_weight = 0;
  date_aging;
  constructor(private api: Menu6Service, private auth: AuthService, private authAf: AngularFireAuth) {
    pdfMake.fonts = {
      THNiramitAS: {
        normal: 'TH Niramit AS.ttf',
        bold: 'TH Niramit AS Bold.ttf',
        italics: 'TH Niramit AS Italic.ttf',
        bolditalics: 'TH Niramit AS Bold Italic.ttf'
      },
      Roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Medium.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: 'Roboto-MediumItalic.ttf'
      }
    };
   }

  ngOnInit() {
    this.api.showNotificationT1().subscribe(data => {
      const let1 = Object.keys(data).map(a => data[a]);
      console.log(data);
      for (let i = 0; i < let1.length ; i++) {
        const let2 = Object.keys(let1[i]).map(a => let1[i][a]);
        this.datass.push({date: Object.keys(data)[i], count: Object.keys(let1[i]).length, data: let2});
        this.countReport++;
      }
    });

    this.authAf.authState.subscribe(datas => {          /* แสดงชื่อผู้พิมพ์รายงาน */
      this.auth.showData(datas.email).subscribe(snap => {
        const values = Object.keys(snap).map(key => snap[key]);
        this.name = values[0].fname + ' ' + values[0].lname;
        console.log(this.name);
      });
    });

    const month = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', ' พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    // แสดงวันที่พิมพ์
    const td = new Date();
    this.today = td.getDate() + ' ' + month[td.getMonth()] + ' ' + (td.getFullYear() + 543);

  }
  onModel(dd) {
    console.log(dd.data);
    this.data_import = [];
    this.datas_m = dd.data;
    this.data_import = dd.data;
    for (let i = 0; i < dd.data.length; i++) {
      dd.data[i].count = i + 1;
      this.data_import.push(dd.data[i]);
      // this.date_aging = dd.date;
    }
  }

  report() {
    const docDefinition = {
      content: [
        {
          columns: [
          { text: 'วันที่พิมพ์ : ' + this.today , style: 'title' },
          { text: '' },
          ]
        },

        {text: 'รายงาน', style: 'header'},
        {text: 'รายการใกล้หมดอายุ', style: 'header2'},

        {text: '\n'},

        this.table(this.data_import, ['count', 'date', 'type', 'barcode',
         'room', 'status']),

        {text: 'จำนวนซากเนื้อโค ' + this.data_import.length + ' รายการ', alignment: 'right', margin: [0, 5, 0, 0]},

         {text: '\n\n\n\n'},

         {
          columns: [
          { text: '..........................................', fontSize: 16, alignment: 'right'},
          ]
        },
        {
          columns: [

          { text: '(          ' + this.name + '          )', alignment: 'center', margin: [390, 2, 0, 0]},
          ]

        },
        {
          columns: [
          { text: 'ผู้พิมพ์รายงาน', alignment: 'right', bold: true, margin: [0, 2, 37, 0]},
        ]
        },
      ],
      defaultStyle: {
        font: 'THNiramitAS'
      },
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center'
        },
        header2: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          margin: [ 0, 0, 0, 15 ]
        },
        title: {
          fontSize: 12
        },
        t: {
          fontSize: 12,
          alignment: 'center'
        },
      }
    };
    pdfMake.createPdf(docDefinition).download();
  }


  buildTableBody(data, columns) {
    const body = [];
    body.push(['ลำดับ', 'วันหมดอายุ', 'ประเภทซาก', 'รหัสบาร์โค้ด', 'ห้อง', 'สถานะ']);
      data.forEach(function (row) {
          const dataRow = [];

          columns.forEach(function (column) {
            dataRow.push(row[column].toString());
          });
          body.push(dataRow);
        });
        return body;
      }

  table(data, columns) {
    return {
      table: {
        headerRows: 1,
        widths: ['auto', 'auto', 'auto', '*', 'auto', 'auto'],
        body: this.buildTableBody(data, columns),
    }, style: 't'
  };
  }
}
