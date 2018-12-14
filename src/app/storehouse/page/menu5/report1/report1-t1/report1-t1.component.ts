import { Component, OnInit } from '@angular/core';
import { Menu2Service } from '../../../menu2/menu2.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-report1-t1',
  templateUrl: './report1-t1.component.html',
  styleUrls: ['./report1-t1.component.css']
})
export class Report1T1Component implements OnInit {
  count = 0;
  datas: any = [];
  datass = [];
  check = 3;
  weight_all = 0;
  detailFilter = [];
  data_import: any = [];      /* ไว้แสดงข้อมูลตาราง */
  today;                      /* ไว้แสดงวันที่พิมพ์ */
  countReport = 0;      /* ไว้นับจำนวนข้อมูลที่ Query */
  // น้ำหนักรวมออกรายงานปกติ
  count_weight = 0;
  count_weight_c = 0;
  // รายงานสรุป
  t1_num = 0; t1_w = 0; t1_wc = 0; t2_num = 0; t2_w = 0; t2_wc = 0;
  t3_num = 0; t3_w = 0; t3_wc = 0; t4_num = 0; t4_w = 0; t4_wc = 0;
  t5_num = 0; t5_w = 0; t5_wc = 0; t6_num = 0; t6_w = 0; t6_wc = 0;
  t7_num = 0; t7_w = 0; t7_wc = 0; t8_num = 0; t8_w = 0; t8_wc = 0;
  t9_num = 0; t9_w = 0; t9_wc = 0; t10_num = 0; t10_w = 0; t10_wc = 0;
  t11_num = 0; t11_w = 0; t11_wc = 0; t12_num = 0; t12_w = 0; t12_wc = 0;
  t13_num = 0; t13_w = 0; t13_wc = 0; t14_num = 0; t14_w = 0; t14_wc = 0;
  t15_num = 0; t15_w = 0; t15_wc = 0; t16_num = 0; t16_w = 0; t16_wc = 0;
  t17_num = 0; t17_w = 0; t17_wc = 0; t18_num = 0; t18_w = 0; t18_wc = 0;
  t19_num = 0; t19_w = 0; t19_wc = 0; t20_num = 0; t20_w = 0; t20_wc = 0;
  t21_num = 0; t21_w = 0; t21_wc = 0; t22_num = 0; t22_w = 0; t22_wc = 0;
  t23_num = 0; t23_w = 0; t23_wc = 0; t24_num = 0; t24_w = 0; t24_wc = 0;
  t25_num = 0; t25_w = 0; t25_wc = 0; t26_num = 0; t26_w = 0; t26_wc = 0;
  t27_num = 0; t27_w = 0; t27_wc = 0; t28_num = 0; t28_w = 0; t28_wc = 0;
  t29_num = 0; t29_w = 0; t29_wc = 0; t30_num = 0; t30_w = 0; t30_wc = 0;

  constructor(private api: Menu2Service) {
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
    this.datas = [];
    this.api.showHistory_Import().subscribe(data => {
      const a = Object.keys(data).map(key => data[key]);
      for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
        this.datass.push(a[i]);
        this.count++;
        this.detailFilter.push(a[i]);
      }
    });

    const month = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', ' พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    // แสดงวันที่พิมพ์
    const td = new Date();
    this.today = td.getDate() + ' ' + month[td.getMonth()] + ' ' + (td.getFullYear() + 543);

      this.api.showHistory_Import().subscribe(data => {
      const a = Object.keys(data).map(key => data[key]);
      if (data !== null) {
        for (let i = 0 ; i < a.length ; i++) {
          this.datas.push(a[i]);
          this.datas[i].count = i + 1;
          this.detailFilter.push(a[i]);
          this.data_import.push(a[i]);
          this.count_weight += Number(a[i].weight);

          if (a[i].weight_c === '-') {
            this.count_weight_c += 0;
          } else {
            this.count_weight_c += Number(a[i].weight_c);
          }

          // แสดงวันที่ในตาราง
          const d = new Date(a[i].date);
          this.data_import[i].date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + (d.getFullYear() + 543);
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
      } else {
        this.data_import = [];
      }
    });


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

  report_c() {    /* ------------ ออกรายงานสรุป ----------------------------------------------------- */
    const t1_num_all = this.t1_num + this.t2_num;
    const t1_w_all = Number(this.t1_w) + Number(this.t2_w);
    const t1_wc_all = Number(this.t1_wc) + Number(this.t2_wc);
    const docDefinition = {
      content: [
        {
          columns: [
          { text: 'วันที่พิมพ์ : ' + this.today , style: 'title' },
          { text: '' },
          ]
        },

        {text: 'รายงานสรุป', style: 'header'},
        {text: 'ประวัติการนำเข้าซากเนื้อโค', style: 'header2'},

        {text: '\n'},
        {text: 'ข้อมูลระหว่างวันที่ 1 ธันวาคม 2561 ถึงวันที่ 2 ธันวาคม 2561'},
        {text: '\n'},

        {text: 'ซากเนื้อโค (ซ้าย-ขวา)', bold: true, margin: [0, 0, 0, 3]},

        {
          style: 'tableExample',
          table: {
            headerRows: 1,
            widths: [25, '*', '*', '*', '*'],
            body: [
              [{text: 'ลำดับ', style: 'thead'}, {text: 'รายการ', style: 'thead'},
               {text: 'จำนวนซาก', style: 'thead'}, {text: 'น้ำหนักอุ่น(กก.)', style: 'thead'}, {text: 'น้ำหนักเย็น(กก.)', style: 'thead'}],

               [{text: '1', style: 'tbody'}, {text: 'ซากเนื้อโคซากซ้าย', style: 'tbody'}, {text: this.t1_num, style: 'tbody'},
                {text: this.t1_w.toFixed(2), style: 'tbody'}, {text: this.t1_wc.toFixed(2), style: 'tbody'}],
               [{text: '2', style: 'tbody'}, {text: 'ซากเนื้อโคซากขวา', style: 'tbody'}, {text: this.t2_num, style: 'tbody'},
               {text: this.t2_w.toFixed(2), style: 'tbody'}, {text:  this.t2_wc.toFixed(2), style: 'tbody'}],
               ['', {text: 'รวม', style: 'last'}, {text: t1_num_all, style: 'last'},
               {text: t1_w_all.toFixed(2), style: 'last'}, {text: t1_wc_all.toFixed(2), style: 'last'}],

              //  [{text: '3', style: 'tbody'}, {text: 'ซากเนื้อโคซากซ้ายบน', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '4', style: 'tbody'}, {text: 'ซากเนื้อโคซากซ้ายล่าง', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '5', style: 'tbody'}, {text: 'ซากเนื้อโคซากขวาบน', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '6', style: 'tbody'}, {text: 'ซากเนื้อโคซากขวาล่าง', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '7', style: 'tbody'}, {text: 'เนื้อน่อง', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '8', style: 'tbody'}, {text: 'เนื้อสะโพกน่อง', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '9', style: 'tbody'}, {text: 'เนื้อลูกมะพร้าว', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '10', style: 'tbody'}, {text: 'เนื้อทีโบน', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '11', style: 'tbody'}, {text: 'เนื้อสันสะโพก', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '12', style: 'tbody'}, {text: 'เนื้อหางสันสะโพก', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '13', style: 'tbody'}, {text: 'เนื้อสันนอก', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '14', style: 'tbody'}, {text: 'เนื้อใบบัวสเต๊ก', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '15', style: 'tbody'}, {text: 'เนื้อสะโพกใน', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '16', style: 'tbody'}, {text: 'เนื้อสันใน', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '17', style: 'tbody'}, {text: 'เนื้อสันกลางถอดกระดูก', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '18', style: 'tbody'}, {text: 'เนื้อซี่โครงติดกระดูก', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '19', style: 'tbody'}, {text: 'เนื้อใบพาย', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '20', style: 'tbody'}, {text: 'เนื้อปลาช่อน', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '21', style: 'tbody'}, {text: 'เนื้อเสือร้องไห้', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '22', style: 'tbody'}, {text: 'เนื้อรักบี้', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '23', style: 'tbody'}, {text: 'เนื้อสันไหล่', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],
              //  [{text: '24', style: 'tbody'}, {text: 'เครื่องใน', style: 'tbody'},
              //  {text: '0', style: 'tbody'}, {text: '0.00', style: 'tbody'}],

              // [{text: Number('11') + Number('5'), style: 'last'}, '',
              // {text: '0 กิโลกรัม', style: 'last'}, {text: '0.00 กิโลกรัม', style: 'last'}],
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
          { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '(', fontSize: 16, margin: [50, 0, 0, 0] },
          { text: ')', fontSize: 16, alignment: 'right'}
          ]
        },
        {
          columns: [
          { text: 'ผู้พิมพ์รายงาน', alignment: 'right', margin: [0, 2, 40, 0]},
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
    pdfMake.createPdf(docDefinition).open();
  }

  report() {  /* ------------ ออกรายงานปกติ -------------------------------------------------------- */
    const docDefinition = {
      content: [
        {
          columns: [
          { text: 'วันที่พิมพ์ : ' + this.today , style: 'title' },
          { text: '' },
          ]
        },

        {text: 'รายงาน', style: 'header'},
        {text: 'ประวัติการนำเข้าซากเนื้อโค', style: 'header2'},

        {text: 'ข้อมูลระหว่างวันที่ 1 ธันวาคม 2561 ถึงวันที่ 2 ธันวาคม 2561'},
        {text: '\n'},

        this.table(this.data_import, ['count', 'date', 'owner', 'type', 'cow_code', 'code', 'barcode',
         'weight', 'weight_c', 'import_name']),

        {text: 'จำนวนซากเนื้อโค ' + this.countReport + ' รายการ', alignment: 'right', margin: [0, 5, 0, 0]},
        // tslint:disable-next-line:max-line-length
        {text: 'น้ำหนักอุ่น ' + this.count_weight.toFixed(2) + ' กิโลกรัม, น้ำหนักเย็น ' + this.count_weight_c.toFixed(2) + ' กิโลกรัม', alignment: 'right'},

         {text: '\n\n\n\n'},

         {
          columns: [
          { text: '..........................................', fontSize: 16, alignment: 'right'},
          ]
        },
        {
          columns: [
          { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '(', fontSize: 16, margin: [50, 0, 0, 0] },
          { text: ')', fontSize: 16, alignment: 'right'}
          ]
        },
        {
          columns: [
          { text: 'ผู้พิมพ์รายงาน', alignment: 'right', margin: [0, 2, 40, 0]},
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
    pdfMake.createPdf(docDefinition).open();
  }

  buildTableBody(data, columns) {
    const body = [];
    body.push(['ลำดับ', 'วันที่นำเข้า', 'เจ้าของซาก', 'ประเภทซาก', 'เบอร์โค', 'รหัสซาก', 'รหัสบาร์โค้ด',
     'น้ำหนักอุ่น(กก.)', 'น้ำหนักเย็น(กก.)', 'ผู้นำเข้า']);
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
        widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', '*', 'auto', 'auto', 'auto'],
        body: this.buildTableBody(data, columns),
    }, style: 't'
  };
}
}
