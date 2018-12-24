import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from 'src/app/auth.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import * as firebase from 'firebase';
import { Menu1Service } from '../../menu1/menu1.service';

@Component({
  selector: 'app-report3',
  templateUrl: './report3.component.html',
  styleUrls: ['./report3.component.css']
})
export class Report3Component implements OnInit {
  name;
  count = 0;
  datas: any = [];
  datass: any = [];
  check = 3;
  weight_all = 0;
  detailFilter = [];
  data_import: any = [];      /* ไว้แสดงข้อมูลตาราง */
  today;                      /* ไว้แสดงวันที่พิมพ์ */
  aging_length;
  // น้ำหนักรวมออกรายงานปกติ
  countReport = 0;
  count_weight = 0;

  // รายงานสรุป
  t1_num = 0; t1_w = 0; t1_wc = 0; t2_num = 0; t2_w = 0; t2_wc = 0;

  start = '';
  end =  '';
  startvalue: any = '';
  endvalue: any = '';
  start_at;
  end_at;
  constructor(private api: Menu1Service, private authAf: AngularFireAuth, private auth: AuthService) {
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
    this.count = 0;
    this.count_weight = 0;
    this.datas = [];
    this.data_import = [];
    this.detailFilter = [];
    this.countReport = 0;
    this.api.showAging().subscribe(data => {
      const a = Object.keys(data).map(key => data[key]);
      for (let i = 0; i < a.length; i++) {
        if (a[i].status === 'บ่มเสร็จแล้ว') {
          this.datass.push(a[i]);
          this.count++;
          this.detailFilter.push(a[i]);
          this.count_weight += Number(a[i].weight);

          const o = new Date();
          this.aging_length = Math.round((o.getTime() - a[i].date) / (1000 * 3600 * 24));
          this.datass[i].day_aging = this.aging_length;
        }
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

      this.api.showAging().subscribe(data => {
      const a = Object.keys(data).map(key => data[key]);
      if (data !== null) {
        for (let i = 0 ; i < a.length ; i++) {
          if (a[i].status === 'บ่มเสร็จแล้ว') {
            this.datas.push(a[i]);
            this.datas[i].count = i + 1;
            this.detailFilter.push(a[i]);
            this.data_import.push(a[i]);
            this.count_weight += Number(a[i].weight);
          }

          // แสดงวันที่ในตาราง
          const d = new Date(a[i].date);
          this.data_import[i].date_aging = d.getDate() + '/' + (d.getMonth() + 1) + '/' + (d.getFullYear() + 543);
          // this.data_import[i].date = d.getDate() + ' ' + month[d.getMonth()] + ' ' + (d.getFullYear() + 543);
          // แสดงจำนวนทั้งหมดที่ query
          this.countReport ++;

          if (a[i].type === 'ซากซ้าย') {
            this.t1_num ++;
            this.t1_w += Number(a[i].weight);
            this.t1_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'ซากขวา') {
            this.t2_num ++;
            this.t2_w += Number(a[i].weight);
            this.t2_wc += Number(a[i].weight_c);
          }
        }
        document.getElementById('w1').innerHTML =
        this.count_weight.toFixed(2);
      } else {
        this.data_import = [];
        this.t1_num = 0; this.t1_w = 0; this.t1_wc = 0; this.t2_num = 0; this.t2_w = 0; this.t2_wc = 0;
      }
    });
  }

  filter_type(e1) {
    console.log(this.detailFilter, this.data_import);
    this.data_import = [];
    this.datass = [];
    this.count = 0;
    this.count_weight = 0;
    this.countReport = 0;
    console.log(e1.value);
    if (e1.value === 'ทั้งหมด') {
      this.count = this.detailFilter.length;
      this.datass = this.detailFilter;
      this.detailFilter.forEach( a => {
      this.count_weight += Number(a.weight);
      });

      this.api.showAging().subscribe(datas => {
        const value = Object.keys(datas).map(key => datas[key]);
        let c = 0;
        for (let i = 0; i < value.length; i++) {
          console.log(value[i]);
          if (value[i].type === 'ซากซ้าย' || value[i].type === 'ซากขวา') {
            value[i].count = c + 1;
            const d = new Date(value[i].date);
            value[i].date = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();
            this.data_import.push(value[i]);
            c++;
            this.countReport ++;
          }
        }
      });

    } else {
      this.api.showAging().subscribe(datas => {
        const value = Object.keys(datas).map(key => datas[key]);
        let c = 0;
        for (let i = 0; i < value.length; i++) {
          console.log(value[i]);
          if (value[i].type === e1.value) {
            value[i].count = c + 1;
            const d = new Date(value[i].date);
            value[i].date = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();
            this.data_import.push(value[i]);
            c++;
            this.countReport ++;
          }
        }
      });
      this.detailFilter.forEach( a => {
        if (a.type === e1.value) {
          console.log(a.weight);
          this.count_weight += Number(a.weight);
          console.log(this.count_weight);
          this.datass.push(a);
          this.count ++;
        }
      });

    }
    document.getElementById('w1').innerHTML =
        this.count_weight.toFixed(2);

    console.log(this.count_weight);
  }

  dropdown_search(v) {       /* เลือกประเภทการ search */
    console.log(v.value);
    if (v.value === '1') {
      this.check = 3;
    } else if (v.value === '2') {
      this.check = 11;
    } else if (v.value === '3') {
      this.check = 5;
    } else if (v.value === '4') {
      this.check = 6;
    } else if (v.value === '5') {
      this.check = 7;
    } else if (v.value === '6') {
      this.check = 8;
    }
  }

  searchTable() {         /* ช่อง search ตาราง */
    let input, filter, table, tr, td, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('tables');
    tr = table.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[this.check];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }

  report_c_nodate() {
    this.start_at = '-';
    this.end_at = '-';
    this.report_c();
  }

  report_c() {    /* ------------ ออกรายงานสรุป ----------------------------------------------------- */
      if ( this.start_at === undefined || this.end_at === undefined) {
        this.report_c_nodate();
      } else {
      const t1_num_all = this.t1_num + this.t2_num;
      const t1_w_all = Number(this.t1_w) + Number(this.t2_w);

      const docDefinition = {
        content: [
          {
            columns: [
            { text: 'วันที่พิมพ์ : ' + this.today , style: 'title' },
            { text: '' },
            ]
          },

          {text: 'รายงานสรุป', style: 'header'},
          {text: 'ประวัติการบ่มซากเนื้อโค', style: 'header2'},

          {text: '\n'},
          {text: 'ข้อมูลระหว่างวันที่ ' + this.start_at + ' ถึงวันที่ ' + this.end_at + ' '},
          {text: '\n'},

          {text: 'ซากเนื้อโค (ซ้าย-ขวา)', bold: true, margin: [0, 0, 0, 3]},
          {
            table: {
              headerRows: 1,
              widths: [25, '*', '*', '*'],
              body: [
                [{text: 'ลำดับ', style: 'thead'}, {text: 'รายการ', style: 'thead'},
      {text: 'จำนวนซาก', style: 'thead'}, {text: 'น้ำหนักอุ่น(กก.)', style: 'thead'}],

                 [{text: '1', style: 'tbody'}, {text: 'ซากเนื้อโคซากซ้าย', style: 'tbody'}, {text: this.t1_num, style: 'tbody'},
                  {text: this.t1_w.toFixed(2), style: 'tbody'}],
                 [{text: '2', style: 'tbody'}, {text: 'ซากเนื้อโคซากขวา', style: 'tbody'}, {text: this.t2_num, style: 'tbody'},
                 {text: this.t2_w.toFixed(2), style: 'tbody'}],

                 ['', {text: 'รวม', style: 'last'}, {text: t1_num_all, style: 'last'},
                 {text: t1_w_all.toFixed(2), style: 'last'}],
                ]
              },
              layout: 'lightHorizontalLines'
            },

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
            { text: 'ผู้พิมพ์รายงาน', alignment: 'right', margin: [0, 2, 37, 0]},
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
            alignment: 'center',
          },
          header2: {
            fontSize: 18,
            bold: true,
            alignment: 'center',
            margin: [ 0, 0, 0, 15 ]
          },
          thead: {
            bold: true,
            alignment: 'center',
          },
          tbody: {
            alignment: 'center',
          },
          last: {
            bold: true,
            alignment: 'center'
          },
        }
      };
      pdfMake.createPdf(docDefinition).download();
    }
  }

  report_nodate() {
    this.start_at = '-';
    this.end_at = '-';
    this.report();
  }

  report() {  /* ------------ ออกรายงานปกติ -------------------------------------------------------- */
    if ( this.start_at === undefined || this.end_at === undefined) {
      this.report_nodate();
    } else {
    const docDefinition = {
      content: [
        {
          columns: [
          { text: 'วันที่พิมพ์ : ' + this.today , style: 'title' },
          { text: '' },
          ]
        },

        {text: 'รายงาน', style: 'header'},
        {text: 'ประวัติการบ่มซากเนื้อโค', style: 'header2'},

        {text: '\n'},
        {text: 'ข้อมูลระหว่างวันที่ ' + this.start_at + ' ถึงวันที่ ' + this.end_at + ' '},
        {text: '\n'},

        this.table(this.data_import, ['count', 'date_aging', 'type', 'barcode',
         'weight', 'room', 'status', 'aging_name']),

        {text: 'จำนวนซากเนื้อโค ' + this.countReport + ' รายการ', alignment: 'right', margin: [0, 5, 0, 0]},

        {text: 'น้ำหนักอุ่น ' + this.count_weight.toFixed(2) + ' กิโลกรัม', alignment: 'right'},

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
}

  buildTableBody(data, columns) {
    const body = [];
    body.push(['ลำดับ', 'วันที่บ่มเสร็จ', 'ประเภทซาก', 'รหัสบาร์โค้ด', 'น้ำหนักอุ่น(กก.)',
     'ห้อง', 'สถานะ', 'ผู้บ่มซาก']);
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
        widths: ['auto', 'auto', 'auto', '*', 'auto', 'auto', '*', '*'],
        body: this.buildTableBody(data, columns),
    }, style: 't'
  };
}

startdate(start) {
  this.start = start.value;
  const date1 = new Date(this.start);
  const date2 = new Date(this.end);
  if (this.start === '' || this.end === '') {
    this.start = this.start;
    this.end = this.end;
  } else {
    const timeDiff = date2.getTime() - date1.getTime();
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffDays < 0) {
      this.end = this.start;
    }
    console.log(diffDays);

    console.log(this.startvalue);
  }
  this.startvalue = Number(date1);
  const month = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', ' พฤษภาคม', 'มิถุนายน',
  'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
  this.start_at = date1.getDate() + ' ' + month[date1.getMonth()] + ' ' + (date1.getFullYear() + 543);
  this.end_at = date2.getDate() + ' ' + month[date2.getMonth()] + ' ' + (date2.getFullYear() + 543);
}

enddate(end) {
  this.end = end.value;
  const date3 = new Date(this.start);
  const date4 = new Date(this.end);
  if (this.start === '' || this.end === '') {
    this.start = this.start;
    this.end = this.end;
  } else {

    const timeDiff = date4.getTime() - date3.getTime();
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffDays < 0) {
      this.start = this.end;
    }
    console.log(diffDays);

    console.log(this.endvalue);
  }
  this.endvalue = Number(date4);
  const month = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', ' พฤษภาคม', 'มิถุนายน',
  'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
  this.start_at = date3.getDate() + ' ' + month[date3.getMonth()] + ' ' + (date3.getFullYear() + 543);
  this.end_at = date4.getDate() + ' ' + month[date4.getMonth()] + ' ' + (date4.getFullYear() + 543);
}

searchDate() {

  console.log(this.startvalue);
  console.log(this.endvalue);
  // tslint:disable-next-line:max-line-length
  firebase.database().ref().child('/store/menu1/aging').orderByChild('date').startAt(Number(this.startvalue)).endAt(Number(this.endvalue)).once('value', data => {
    console.log(data.val());
    if (data.val() != null) {
      this.datass = Object.keys(data.val()).map(key => data.val()[key]);

      for (let i = 0 ; i < this.datass.lenght ; i++) {
        this.data_import[i].key = Object.keys(data.val());
        this.datass[i].key = Object.keys(data.val());
        console.log('aaaaaa');
        console.log(this.datass);
        console.log(this.count);
        console.log(this.count_weight);
        this.count ++;
        this.count_weight += Number(this.datass[i].weight);
      }
      // document.getElementById('w1').innerHTML =
      //   this.count_weight.toFixed(2);
      //   document.getElementById('w2').innerHTML =
      //   this.count_weight_c.toFixed(2);
      // this.data_import = Object.keys(data.val()).map(key => data.val()[key]);
      // for (let i = 0 ; i < data.val().length ; i++) {
      //   this.data_import[i].key = Object.keys(data.val());
      // }
      // this.datass = Object.keys(data.val()).map(key => data.val()[key]);
      // for (let i = 0 ; i < data.val().length ; i++) {
      //   this.datass[i].key = Object.keys(data.val());
      // }
      console.log(this.datas);
    } else {
      this.count = 0;
      this.datass = [];
      this.data_import = [];
      this.countReport = 0;
      this.count_weight = 0;
      this.t1_num = 0; this.t1_w = 0; this.t1_wc = 0; this.t2_num = 0; this.t2_w = 0; this.t2_wc = 0;
    }

  });
  document.getElementById('w1').innerHTML =
  this.count_weight.toFixed(2);
}
}
