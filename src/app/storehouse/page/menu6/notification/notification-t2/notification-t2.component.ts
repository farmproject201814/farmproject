import { Component, OnInit } from '@angular/core';
import { SimulationService } from 'src/app/storehouse/simulation/simulation.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

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
  today;
  data_import: any = [];

  constructor(private api: SimulationService) {
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

    const month = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', ' พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    // แสดงวันที่พิมพ์
    const td = new Date();
    this.today = td.getDate() + ' ' + month[td.getMonth()] + ' ' + (td.getFullYear() + 543);
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
          this.data_import.push(Object.values(data)[i]);
          this.data_import[i].counts = (i + 1);
          console.log(this.data_import);
        }
      } else {
        this.data = [];
      }
    });
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
        {text: 'คำร้องขอเบิกซากเนื้อโค', style: 'header2'},

        {text: 'รายการคำร้องขอเบิกซากเนื้อโค ณ วันที่ ' + this.today},
        {text: '\n'},

        this.table(this.data_import, ['counts', 'type', 'weight', 'grade', 'note', 'take_name']),

        {text: 'จำนวนซากเนื้อโค ' + this.data_import.length + ' รายการ', alignment: 'right', margin: [0, 5, 0, 0]},

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
    body.push(['ลำดับ', 'รายการที่ขอเบิก', 'น้ำหนัก(กก.)', 'ระดับเกรดซาก', 'หมายเหตุ', 'ผู้ขอเบิก']);
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
        widths: ['auto', '*', '*', '*', '*', '*'],
        body: this.buildTableBody(data, columns),
    }, style: 't'
  };
  }

  onDelete(key) {
    swal({
      title: 'ยืนยัน!',
      text: 'ต้องการลบรายการนี้หริอไม่?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'กลับ'
    }).then((result) => {
      if (result.value) {
        // this.api.removeNotificationT1(key).subscribe();
        this.ngOnInit();
        swal({
          title: 'สำเร็จ!',
          text: 'ลบรายการสำเร็จ',
          type: 'success',
          confirmButtonText: 'ปิด'
        });
      }
    });
  }
}
