import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from 'src/app/auth.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import * as firebase from 'firebase';
import { Menu3Service } from '../../../menu3/menu3.service';

@Component({
  selector: 'app-report2-t4',
  templateUrl: './report2-t4.component.html',
  styleUrls: ['./report2-t4.component.css']
})
export class Report2T4Component implements OnInit {
  name;
  count = 0;
  datas: any = [];
  datass = [];
  check = 3;
  weight_all = 0;
  detailFilter = [];
  data_import: any = [];      /* ไว้แสดงข้อมูลตาราง */
  today;                      /* ไว้แสดงวันที่พิมพ์ */
  // น้ำหนักรวมออกรายงานปกติ
  countReport = 0;
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

  start = '';
  end =  '';
  startvalue: any = '';
  endvalue: any = '';
  start_at;
  end_at;
  constructor(private api: Menu3Service, private authAf: AngularFireAuth, private auth: AuthService) {
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
    this.count_weight_c = 0;
    this.datas = [];
    this.data_import = [];
    this.detailFilter = [];
    this.countReport = 0;
    this.api.showHistory_Order().subscribe(data => {
      if (data != null ) {
        const a = Object.keys(data).map(key => data[key]);
        for (let i = 0; i < a.length; i++) {
          if (a[i].type !== 'ซากซ้าย' && a[i].type !== 'ซากขวา' && a[i].type !== 'ซากซ้ายบน'
          && a[i].type !== 'ซากซ้ายล่าง' && a[i].type !== 'ซากขวาบน' && a[i].type !== 'ซากขวาล่าง'
          && a[i].type !== 'เครื่องใน' && a[i].type !== 'หัว' && a[i].type !== 'หนัง'
          && a[i].type !== 'หาง' && a[i].type !== 'ขา' && a[i].type !== 'ไขมัน' && a[i].type !== 'อองเร') {
            console.log(a[i]);
            this.datass.push(a[i]);
            this.count++;
            this.detailFilter.push(a[i]);
            this.count_weight += Number(a[i].weight);
            if (a[i].weight_c === '-') {
              this.count_weight_c += 0;
            } else {
              this.count_weight_c += Number(a[i].weight_c);
            }
          }
          if (a[i].type === 'ซากซ้าย') {
            this.t1_num ++;
            this.t1_w += Number(a[i].weight);
            this.t1_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'ซากขวา') {
            this.t2_num ++;
            this.t2_w += Number(a[i].weight);
            this.t2_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'ซากซ้ายบน') {
            this.t3_num ++;
            this.t3_w += Number(a[i].weight);
            this.t3_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'ซากซ้ายล่าง') {
            this.t4_num ++;
            this.t4_w += Number(a[i].weight);
            this.t4_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'ซากขวาบน') {
            this.t5_num ++;
            this.t5_w += Number(a[i].weight);
            this.t5_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'ซากขวาล่าง') {
            this.t6_num ++;
            this.t6_w += Number(a[i].weight);
            this.t6_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'เนื้อน่อง') {
            this.t7_num ++;
            this.t7_w += Number(a[i].weight);
            this.t7_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'เนื้อสะโพกน่อง') {
            this.t8_num ++;
            this.t8_w += Number(a[i].weight);
            this.t8_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'เนื้อลูกมะพร้าว') {
            this.t9_num ++;
            this.t9_w += Number(a[i].weight);
            this.t9_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'เนื้อทีโบน') {
            this.t10_num ++;
            this.t10_w += Number(a[i].weight);
            this.t10_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'เนื้อสันสะโพก') {
            this.t11_num ++;
            this.t11_w += Number(a[i].weight);
            this.t11_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'เนื้อหางสันสะโพก') {
            this.t12_num ++;
            this.t12_w += Number(a[i].weight);
            this.t12_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'เนื้อสันนอก') {
            this.t13_num ++;
            this.t13_w += Number(a[i].weight);
            this.t13_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'เนื้อใบบัวสเต๊ก') {
            this.t14_num ++;
            this.t14_w += Number(a[i].weight);
            this.t14_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'เนื้อสะโพกใน') {
            this.t15_num ++;
            this.t15_w += Number(a[i].weight);
            this.t15_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'เนื้อสันใน') {
            this.t16_num ++;
            this.t16_w += Number(a[i].weight);
            this.t16_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'เนื้อสันกลางถอดกระดูก') {
            this.t17_num ++;
            this.t17_w += Number(a[i].weight);
            this.t17_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'เนื้อซี่โครงติดกระดูก') {
            this.t18_num ++;
            this.t18_w += Number(a[i].weight);
            this.t18_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'เนื้อใบพาย') {
            this.t19_num ++;
            this.t19_w += Number(a[i].weight);
            this.t19_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'เนื้อปลาช่อน') {
            this.t20_num ++;
            this.t20_w += Number(a[i].weight);
            this.t20_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'เนื้อเสือร้องไห้') {
            this.t21_num ++;
            this.t21_w += Number(a[i].weight);
            this.t21_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'เนื้อรักบี้') {
            this.t22_num ++;
            this.t22_w += Number(a[i].weight);
            this.t22_wc += Number(a[i].weight_c);
          } else if (a[i].type === 'เนื้อสันไหล่') {
            this.t23_num ++;
            this.t23_w += Number(a[i].weight);
            this.t23_wc += Number(a[i].weight_c);
          }
        }
        document.getElementById('w1').innerHTML =
        this.count_weight.toFixed(2);
        document.getElementById('w2').innerHTML =
        this.count_weight_c.toFixed(2);
      } else {
        this.data_import = [];
        this.t1_num = 0; this.t1_w = 0; this.t1_wc = 0; this.t2_num = 0; this.t2_w = 0; this.t2_wc = 0;
        this.t3_num = 0; this.t3_w = 0; this.t3_wc = 0; this.t4_num = 0; this.t4_w = 0; this.t4_wc = 0;
        this.t5_num = 0; this.t5_w = 0; this.t5_wc = 0; this.t6_num = 0; this.t6_w = 0; this.t6_wc = 0;
        this.t7_num = 0; this.t7_w = 0; this.t7_wc = 0; this.t8_num = 0; this.t8_w = 0; this.t8_wc = 0;
        this.t9_num = 0; this.t9_w = 0; this.t9_wc = 0; this.t10_num = 0; this.t10_w = 0; this.t10_wc = 0;
        this.t11_num = 0; this.t11_w = 0; this.t11_wc = 0; this.t12_num = 0; this.t12_w = 0; this.t12_wc = 0;
        this.t13_num = 0; this.t13_w = 0; this.t13_wc = 0; this.t14_num = 0; this.t14_w = 0; this.t14_wc = 0;
        this.t15_num = 0; this.t15_w = 0; this.t15_wc = 0; this.t16_num = 0; this.t16_w = 0; this.t16_wc = 0;
        this.t17_num = 0; this.t17_w = 0; this.t17_wc = 0; this.t18_num = 0; this.t18_w = 0; this.t18_wc = 0;
        this.t19_num = 0; this.t19_w = 0; this.t19_wc = 0; this.t20_num = 0; this.t20_w = 0; this.t20_wc = 0;
        this.t21_num = 0; this.t21_w = 0; this.t21_wc = 0; this.t22_num = 0; this.t22_w = 0; this.t22_wc = 0;
        this.t23_num = 0; this.t23_w = 0; this.t23_wc = 0; this.t24_num = 0; this.t24_w = 0; this.t24_wc = 0;
        this.t25_num = 0; this.t25_w = 0; this.t25_wc = 0; this.t26_num = 0; this.t26_w = 0; this.t26_wc = 0;
        this.t27_num = 0; this.t27_w = 0; this.t27_wc = 0; this.t28_num = 0; this.t28_w = 0; this.t28_wc = 0;
        this.t29_num = 0; this.t29_w = 0; this.t29_wc = 0; this.t30_num = 0; this.t30_w = 0; this.t30_wc = 0;
      }
    });

    this.authAf.authState.subscribe(datas => {          /* แสดงชื่อผู้พิมพ์รายงาน */
      this.auth.showData(datas.email).subscribe(snap => {
        const values = Object.keys(snap).map(key => snap[key]);
        this.name = values[0].fname + ' ' + values[0].lname;
        console.log(this.name);
      });
    });

    this.api.showHistory_Order().subscribe(datas => {
      const value = Object.keys(datas).map(key => datas[key]);
      let c = 0;
      for (let i = 0; i < value.length; i++) {
        console.log(value[i]);

        if (value[i].type !== 'ซากซ้าย' && value[i].type !== 'ซากขวา' && value[i].type !== 'ซากซ้ายบน'
        && value[i].type !== 'ซากซ้ายล่าง' && value[i].type !== 'ซากขวาบน' && value[i].type !== 'ซากขวาล่าง'
        && value[i].type !== 'เครื่องใน' && value[i].type !== 'หัว' && value[i].type !== 'หนัง'
        && value[i].type !== 'หาง' && value[i].type !== 'ขา' && value[i].type !== 'ไขมัน' && value[i].type !== 'อองเร')  {
          value[i].count = c + 1;
          const d = new Date(value[i].date);
          value[i].date = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();
          this.data_import.push(value[i]);
          c++;
          this.countReport ++;
        }
      }
    });

    const month = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', ' พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    const e = new Date();
    this.today = e.getDate() + ' ' + month[e.getMonth()] + ' ' + (e.getFullYear() + 543);
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

  filter_type(e1) {
    console.log(this.detailFilter, this.data_import);
    this.data_import = [];
    this.datass = [];
    this.count = 0;
    this.count_weight = 0;
    this.count_weight_c = 0;
    this.countReport = 0;
    console.log(e1.value);
    if (e1.value === 'ทั้งหมด') {
      this.count = this.detailFilter.length;
      this.datass = this.detailFilter;
      this.detailFilter.forEach( a => {
      this.count_weight += Number(a.weight);
      this.count_weight_c += Number(a.weight_c);
      });

      this.api.showHistory_Order().subscribe(datas => {
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
      this.api.showHistory_Order().subscribe(datas => {
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
          this.count_weight_c += Number(a.weight_c);
          console.log(this.count_weight);
          this.datass.push(a);
          this.count ++;
        }
      });

    }
    document.getElementById('w1').innerHTML =
        this.count_weight.toFixed(2);
        document.getElementById('w2').innerHTML =
        this.count_weight_c.toFixed(2);
    console.log(this.count_weight);
  }

  report_c() {    /* ------------ ออกรายงานสรุป ----------------------------------------------------- */
    const t1_num_all = this.t1_num + this.t2_num;
    const t1_w_all = Number(this.t1_w) + Number(this.t2_w);
    const t1_wc_all = Number(this.t1_wc) + Number(this.t2_wc);

    const t2_num_all = this.t3_num + this.t4_num + this.t5_num + this.t6_num;
    const t2_w_all = Number(this.t3_w) + Number(this.t4_w) + Number(this.t5_w) + Number(this.t6_w);
    const t2_wc_all = Number(this.t3_wc) + Number(this.t4_wc) + Number(this.t5_wc) + Number(this.t6_wc);

    const t3_num_all = this.t7_num + this.t8_num + this.t9_num + this.t10_num + this.t11_num + this.t12_num + this.t13_num + this.t14_num
     + this.t15_num + this.t16_num + this.t17_num + this.t18_num + this.t19_num + this.t20_num + this.t21_num + this.t22_num + this.t23_num;
    const t3_w_all = Number(this.t7_w) + Number(this.t8_w) + Number(this.t9_w) + Number(this.t10_w) + Number(this.t11_w)
     + Number(this.t12_w) + Number(this.t13_w) + Number(this.t14_w) + Number(this.t15_w) + Number(this.t16_w) + Number(this.t17_w)
     + Number(this.t18_w) + Number(this.t19_w) + Number(this.t20_w) + Number(this.t21_w) + Number(this.t22_w) + Number(this.t23_w);
    const t3_wc_all = Number(this.t7_wc) + Number(this.t8_wc) + Number(this.t9_wc) + Number(this.t10_wc) + Number(this.t11_wc)
     + Number(this.t12_wc) + Number(this.t13_wc) + Number(this.t14_wc) + Number(this.t15_wc) + Number(this.t16_wc) + Number(this.t17_wc)
     + Number(this.t18_wc) + Number(this.t19_wc) + Number(this.t20_wc) + Number(this.t21_wc) + Number(this.t22_wc) + Number(this.t23_wc);

    const t4_num_all = this.t24_num + this.t25_num + this.t26_num + this.t27_num + this.t28_num + this.t29_num + this.t30_num;
    const t4_w_all = Number(this.t24_w) + Number(this.t25_w) + Number(this.t26_w) + Number(this.t27_w) + Number(this.t28_w)
     + Number(this.t29_w) + Number(this.t30_w);
    const t4_wc_all = Number(this.t24_wc) + Number(this.t25_wc) + Number(this.t26_wc) + Number(this.t27_wc) + Number(this.t28_wc)
     + Number(this.t29_wc) + Number(this.t30_wc);

    const docDefinition = {
      content: [
        {
          columns: [
          { text: 'วันที่พิมพ์ : ' + this.today , style: 'title' },
          { text: '' },
          ]
        },

        {text: 'รายงานสรุป', style: 'header'},
        {text: 'ประวัติการเบิกซากเนื้อโค', style: 'header2'},

        {text: '\n'},
        {text: 'ข้อมูลระหว่างวันที่ ' + this.start_at + ' ถึงวันที่ ' + this.end_at + ' '},
        {text: '\n'},

        {text: 'ซากเนื้อโค (ก้อน)', bold: true, margin: [0, 0, 0, 5]},
        {
        table: {
          headerRows: 1,
          widths: [25, '*', '*', '*', '*'],
          body: [
            [{text: 'ลำดับ', style: 'thead'}, {text: 'รายการ', style: 'thead'},
             {text: 'จำนวนซาก', style: 'thead'}, {text: 'น้ำหนักอุ่น(กก.)', style: 'thead'}, {text: 'น้ำหนักเย็น(กก.)', style: 'thead'}],

             [{text: '1', style: 'tbody'}, {text: 'เนื้อน่อง', style: 'tbody'}, {text: this.t7_num, style: 'tbody'},
              {text: this.t7_w.toFixed(2), style: 'tbody'}, {text: this.t7_wc.toFixed(2), style: 'tbody'}],
             [{text: '2', style: 'tbody'}, {text: 'เนื้อสะโพกนอก', style: 'tbody'}, {text: this.t8_num, style: 'tbody'},
             {text: this.t8_w.toFixed(2), style: 'tbody'}, {text:  this.t8_wc.toFixed(2), style: 'tbody'}],
             [{text: '3', style: 'tbody'}, {text: 'เนื้อลูกมะพร้าว', style: 'tbody'}, {text: this.t9_num, style: 'tbody'},
              {text: this.t9_w.toFixed(2), style: 'tbody'}, {text: this.t9_wc.toFixed(2), style: 'tbody'}],
             [{text: '4', style: 'tbody'}, {text: 'เนื้อทีโบน', style: 'tbody'}, {text: this.t10_num, style: 'tbody'},
             {text: this.t10_w.toFixed(2), style: 'tbody'}, {text:  this.t10_wc.toFixed(2), style: 'tbody'}],
             [{text: '5', style: 'tbody'}, {text: 'เนื้อสันสะโพก', style: 'tbody'}, {text: this.t11_num, style: 'tbody'},
             {text: this.t11_w.toFixed(2), style: 'tbody'}, {text:  this.t11_wc.toFixed(2), style: 'tbody'}],
             [{text: '6', style: 'tbody'}, {text: 'เนื้อหางสันสะโพก', style: 'tbody'}, {text: this.t12_num, style: 'tbody'},
             {text: this.t12_w.toFixed(2), style: 'tbody'}, {text:  this.t12_wc.toFixed(2), style: 'tbody'}],
             [{text: '7', style: 'tbody'}, {text: 'เนื้อสันนอก', style: 'tbody'}, {text: this.t13_num, style: 'tbody'},
             {text: this.t13_w.toFixed(2), style: 'tbody'}, {text:  this.t13_wc.toFixed(2), style: 'tbody'}],
             [{text: '8', style: 'tbody'}, {text: 'เนื้อใบบัวสเต๊ก', style: 'tbody'}, {text: this.t14_num, style: 'tbody'},
             {text: this.t14_w.toFixed(2), style: 'tbody'}, {text:  this.t14_wc.toFixed(2), style: 'tbody'}],
             [{text: '9', style: 'tbody'}, {text: 'เนื้อสะโพกใน', style: 'tbody'}, {text: this.t15_num, style: 'tbody'},
             {text: this.t15_w.toFixed(2), style: 'tbody'}, {text:  this.t15_wc.toFixed(2), style: 'tbody'}],
             [{text: '10', style: 'tbody'}, {text: 'เนื้อสันใน', style: 'tbody'}, {text: this.t16_num, style: 'tbody'},
             {text: this.t16_w.toFixed(2), style: 'tbody'}, {text:  this.t16_wc.toFixed(2), style: 'tbody'}],
             [{text: '11', style: 'tbody'}, {text: 'เนื้อสันกลางถอดกระดูก', style: 'tbody'}, {text: this.t17_num, style: 'tbody'},
             {text: this.t17_w.toFixed(2), style: 'tbody'}, {text:  this.t17_wc.toFixed(2), style: 'tbody'}],
             [{text: '12', style: 'tbody'}, {text: 'เนื้อซี่โครงติดกระดูก', style: 'tbody'}, {text: this.t18_num, style: 'tbody'},
             {text: this.t18_w.toFixed(2), style: 'tbody'}, {text:  this.t18_wc.toFixed(2), style: 'tbody'}],
             [{text: '13', style: 'tbody'}, {text: 'เนื้อใบพาย', style: 'tbody'}, {text: this.t19_num, style: 'tbody'},
             {text: this.t19_w.toFixed(2), style: 'tbody'}, {text:  this.t19_wc.toFixed(2), style: 'tbody'}],
             [{text: '14', style: 'tbody'}, {text: 'เนื้อปลาช่อน', style: 'tbody'}, {text: this.t20_num, style: 'tbody'},
             {text: this.t20_w.toFixed(2), style: 'tbody'}, {text:  this.t20_wc.toFixed(2), style: 'tbody'}],
             [{text: '15', style: 'tbody'}, {text: 'เนื้อเสือร้องไห้', style: 'tbody'}, {text: this.t21_num, style: 'tbody'},
             {text: this.t21_w.toFixed(2), style: 'tbody'}, {text:  this.t21_wc.toFixed(2), style: 'tbody'}],
             [{text: '16', style: 'tbody'}, {text: 'เนื้อรักบี้', style: 'tbody'}, {text: this.t22_num, style: 'tbody'},
             {text: this.t22_w.toFixed(2), style: 'tbody'}, {text:  this.t22_wc.toFixed(2), style: 'tbody'}],
             [{text: '17', style: 'tbody'}, {text: 'เนื้อสันไหล่', style: 'tbody'}, {text: this.t23_num, style: 'tbody'},
             {text: this.t23_w.toFixed(2), style: 'tbody'}, {text:  this.t23_wc.toFixed(2), style: 'tbody'}],

             ['', {text: 'รวม', style: 'last'}, {text: t3_num_all, style: 'last'},
             {text: t3_w_all.toFixed(2), style: 'last'}, {text: t3_wc_all.toFixed(2), style: 'last'}],
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
        {text: 'ประวัติการเบิกออกซากเนื้อโค', style: 'header2'},

        {text: '\n'},
        {text: 'ข้อมูลระหว่างวันที่ ' + this.start_at + ' ถึงวันที่ ' + this.end_at + ' '},
        {text: '\n'},

        this.table(this.data_import, ['count', 'date', 'type', 'barcode', 'weight',
         'weight_c', 'status', 'import_name', 'take_name']),

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
    body.push(['ลำดับ', 'วันที่เบิกออก', 'ประเภทซาก', 'รหัสบาร์โค้ด', 'น้ำหนักอุ่น(กก.)',
     'น้ำหนักเย็น(กก.)', 'สถานะ', 'ผู้นำเข้า', 'ผู้เบิกออก']);
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
        widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', '*', 'auto', 'auto'],
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
  firebase.database().ref().child('/store/menu3/order').orderByChild('date').startAt(Number(this.startvalue)).endAt(Number(this.endvalue)).once('value', data => {
    if (data.val() != null) {
      for (let i = 0 ; i < data.val().length ; i++) {
        this.data_import[i].key = Object.keys(data.val());
        this.datass[i].key = Object.keys(data.val());
      }
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
      this.datass = [];
      this.data_import = [];
      this.countReport = 0;
      this.count_weight = 0;
      this.count_weight_c = 0;
      this.t1_num = 0; this.t1_w = 0; this.t1_wc = 0; this.t2_num = 0; this.t2_w = 0; this.t2_wc = 0;
      this.t3_num = 0; this.t3_w = 0; this.t3_wc = 0; this.t4_num = 0; this.t4_w = 0; this.t4_wc = 0;
      this.t5_num = 0; this.t5_w = 0; this.t5_wc = 0; this.t6_num = 0; this.t6_w = 0; this.t6_wc = 0;
      this.t7_num = 0; this.t7_w = 0; this.t7_wc = 0; this.t8_num = 0; this.t8_w = 0; this.t8_wc = 0;
      this.t9_num = 0; this.t9_w = 0; this.t9_wc = 0; this.t10_num = 0; this.t10_w = 0; this.t10_wc = 0;
      this.t11_num = 0; this.t11_w = 0; this.t11_wc = 0; this.t12_num = 0; this.t12_w = 0; this.t12_wc = 0;
      this.t13_num = 0; this.t13_w = 0; this.t13_wc = 0; this.t14_num = 0; this.t14_w = 0; this.t14_wc = 0;
      this.t15_num = 0; this.t15_w = 0; this.t15_wc = 0; this.t16_num = 0; this.t16_w = 0; this.t16_wc = 0;
      this.t17_num = 0; this.t17_w = 0; this.t17_wc = 0; this.t18_num = 0; this.t18_w = 0; this.t18_wc = 0;
      this.t19_num = 0; this.t19_w = 0; this.t19_wc = 0; this.t20_num = 0; this.t20_w = 0; this.t20_wc = 0;
      this.t21_num = 0; this.t21_w = 0; this.t21_wc = 0; this.t22_num = 0; this.t22_w = 0; this.t22_wc = 0;
      this.t23_num = 0; this.t23_w = 0; this.t23_wc = 0; this.t24_num = 0; this.t24_w = 0; this.t24_wc = 0;
      this.t25_num = 0; this.t25_w = 0; this.t25_wc = 0; this.t26_num = 0; this.t26_w = 0; this.t26_wc = 0;
      this.t27_num = 0; this.t27_w = 0; this.t27_wc = 0; this.t28_num = 0; this.t28_w = 0; this.t28_wc = 0;
      this.t29_num = 0; this.t29_w = 0; this.t29_wc = 0; this.t30_num = 0; this.t30_w = 0; this.t30_wc = 0;
    }

  });
}

}
