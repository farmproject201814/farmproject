import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';
import { SumgradingService } from 'src/app/service/API/beefgrading/sumgrading.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { LyTheme2 } from '@alyle/ui';
import swal from 'sweetalert2';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { resolve } from 'q';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const styles = () => ({
  root: {
    button: {
      marginEnd: '1em',
      marginTop: '.5em',
      marginBottom: '.5em'
    }
  },
  row: {
    display: 'flex',
    marginBottom: '.5em'
  }
});



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  classes = this.theme.addStyleSheet(styles);

  data: any;
  items = {
    $key: '',
    id: '',
    left: '',
    right: '',
    datekil: '',
    datedry: '',
    dateready: '',
    wleft: '',
    wright: '',
    roomdry: '',
    owncattle: '',
    status: '',
    picture: '',

    date_sum: '',
    datecuted: '',
    grade_ex: '',
    grade_sys: '',
    grade_con: '',

    fn_ex1: '',
    fn_ex2: '',
    fn_ex3: '',
    fn_ex4: '',
    fn_ex5: '',
    ln_ex1: '',
    ln_ex2: '',
    ln_ex3: '',
    ln_ex4: '',
    ln_ex5: '',
    sys_grage_cut_fn: '',
    sys_grage_cut_ln: '',
    sys_grage_sum_fn: '',
    sys_grage_sum_ln: ''
  };
  detail;
  chk;
  name: any;
  idcheck = [];
  selectQuestions: string[] = [];
  a = {
    checkprocess: false
  };
  d = {
    Delete: false
  };
  c = {
    check: false
  };

  pdfimage: any;
  key;
  checkReport;
  checkviwe;
  public viwepic;
  public userfirst;
  public userlast;


  constructor(
    private db: AngularFireDatabase,
    private api: SumgradingService,
    private _route: ActivatedRoute,
    private afAuth: AngularFireAuth,
    private theme: LyTheme2) {
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

      this._route.params.subscribe(params => {
        this.key = params['key'];
      });
  }

  ngOnInit() {
    this.api.showData().subscribe(data => {
      this.data = Object.values(data);
      for (let i = 0; i < Object.values(data).length; i++) {
        this.data[i].key = Object.keys(data)[i];
      }
    });

    this.afAuth.authState.subscribe(data => {
      this.detail = this.db
        .list('/users', ref => ref.orderByChild('email').equalTo(data.email))
        .valueChanges();
      console.log(data.email);
      this.detail.subscribe(snap => {
        snap.forEach(element => {
          this.userfirst = element.fname;
          this.userlast = element.lname;
        });
      });
    });
  }

  checkAll_list() {
  /* checkbox ทั้งหมด */
    console.log(this.a);
    if (this.a.checkprocess === false) {
       this.c.check = true;
      //  this.d.Delete = true;
       this.idcheck = [];
       this.data.forEach( a => {
          this.idcheck.push(a.key);
          this.selectQuestions.push(a.key);
       });
       this.a.checkprocess = true;
    } else {
      this.c.check = false;
      // this.d.Delete = false;
      this.a.checkprocess = false;
      this.idcheck = [];
      this.selectQuestions = [];
    }
    console.log('idcheck :', this.idcheck);
  }

  selectMenu(k) {
  /* checkbox ทีละตัว */
    console.log(k);
    this.chk = this.selectQuestions.indexOf(k);
    if (this.chk >= 0) {
      this.a.checkprocess = false;
      this.d.Delete = false;
      this.idcheck.splice(this.chk, 1);
      this.selectQuestions.splice(this.chk, 1);
    } else {
      this.a.checkprocess = true;
      this.d.Delete = true;
      this.idcheck.push(k);
      this.selectQuestions.push(k);
    }
    console.log('idcheck :', this.idcheck);
  }

  checkdelete() {
    swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.api.removeData(this.idcheck).subscribe();
        // this.api.showData().subscribe(data => {
        //   this.data = Object.values(data);
        //   for (let i = 0; i < Object.values(data).length; i++) {
        //     this.data[i].key = Object.keys(data)[i];
        //   }
        // });
        swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
        setTimeout(() => location.reload(), 500);
      }
    });
  }

  viwepicture(v) {
    this.checkviwe = v;
    this.viwepic = this.data[this.checkviwe].picture;
  }

  selectData(a) {
    this.checkReport = a;
    console.log(this.data[a]);
    console.log(a);
  }



  printPDF() {
    this.api.showData().subscribe(data => {
      this.data = Object.values(data);
      for (let i = 0; i < Object.values(data).length; i++) {
        this.data[i].key = Object.keys(data)[i];
      }
    });
    console.log('data:', this.data);

    function convertToDataURLviaCanvas(url) {
      // tslint:disable-next-line:no-shadowed-variable
      return new Promise( (resolve, reject) => {
        const img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');
        img.src = url;
        img.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, img.width, img.height);
    const dataURL = canvas.toDataURL('image/png');
          resolve(dataURL);
        };
        img.src = url;
      });
    }

    convertToDataURLviaCanvas(this.data[this.checkReport].picture).then(data => {
      this.pdfimage = data;
      const d = new Date(this.data[this.checkReport].datecuted);
      const datecut = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear();

      const e = new Date(this.data[this.checkReport].datekill);
      const datekiw = e.getDate() + '-' + e.getMonth() + '-' + e.getFullYear();

      const f = new Date(this.data[this.checkReport].datedry);
      const datedii = f.getDate() + '-' + f.getMonth() + '-' + f.getFullYear();


      const docDefinition = {
        content: [
          {
            columns: [
              {text: '\nใบรายงานผลการตัดเกรด\n\n', fontSize: 24, bold: true, alignment: 'center'}
            ]
          },
          {
            columns: [
              {
                width: 135,
                text: ' '
              },
              {
                image: this.pdfimage,
                width: 250,
              },
            ]
          },
          {text: '\n'},
          {
            columns: [
              {
                width: 90,
                text: ' '
              },
              {
                width: 75,
                text: 'ข้อมูลโค', style: 'header'
              },
            ]
          },
          {text: '\n'},
          {
            columns: [
              {
                width: 100,
                text: ' '
              },
              {
                width: 75,
                text: 'รหัสโค', bold: true
              },
              {
                width: 200,
                text: this.data[this.checkReport].id
              },
            ]
          },
          {text: '\n'},
          {
            columns: [
              {
                width: 100,
                text: ' '
              },
              {
                width: 75,
                text: 'รหัสซากซ้าย', bold: true
              },
              {
                width: 200,
                text: this.data[this.checkReport].left
              },
            ]
          },
          {text: '\n'},
          {
            columns: [
              {
                width: 100,
                text: ' '
              },
              {
                width: 75,
                text: 'รหัสซากขวา', bold: true
              },
              {
                width: 200,
                text: this.data[this.checkReport].right
              },
            ]
          },
          {text: '\n'},
          {
            columns: [
              {
                width: 100,
                text: ' '
              },
              {
                width: 75,
                text: 'น้ำหนักซากซ้าย', bold: true
              },
              {
                width: 30,
                text: this.data[this.checkReport].wleft
              },
              {
                width: 75,
                text: 'กิโลกรัม.'
              },
            ]
          },
          {text: '\n'},
          {
            columns: [
              {
                width: 100,
                text: ' '
              },
              {
                width: 75,
                text: 'น้ำหนักซากขวา', bold: true
              },
              {
                width: 30,
                text: this.data[this.checkReport].wright
              },
              {
                width: 75,
                text: 'กิโลกรัม.'
              },
            ]
          },
          {text: '\n'},
          {
            columns: [
              {
                width: 100,
                text: ' '
              },
              {
                width: 75,
                text: 'วันที่เข้าเชือด', bold: true
              },
              {
                width: 200,
                text: datekiw
              },
            ]
          },
          {text: '\n'},
          {
            columns: [
              {
                width: 100,
                text: ' '
              },
              {
                width: 75,
                text: 'วันที่เข้าบ่ม', bold: true
              },
              {
                width: 200,
                text: datedii
              },
            ]
          },
          {text: '\n'},
          {
            columns: [
              {
                width: 100,
                text: ' '
              },
              {
                width: 75,
                text: 'วันที่ตัดเกรด', bold: true
              },
              {
                width: 200,
                text: datecut
              },
            ]
          },
          {text: '\n'},
          {
            columns: [
              {
                width: 100,
                text: ' '
              },
              {
                width: 75,
                text: 'ชื่อเจ้าของโค', bold: true
              },
              {
                width: 200,
                text: this.data[this.checkReport].firstown + ' ' + this.data[this.checkReport].lastown
              },
            ]
          },
          {text: '\n'},
          {
            columns: [
              {
                width: 100,
                text: ' '
              },
              {
                width: 75,
                text: 'เกรดของซากโค', bold: true
              },
              {
                width: 200,
                text: this.data[this.checkReport].grade_con
              },
            ]
          },
          {text: '\n\n'},
          {
            columns: [
              {
                width: 100,
                text: ' '
              },
              {
                width: 125,
                text: 'ออกรายงานผลการตัดเกรดโดย', bold: true
              },
              {
                width: 200,
                text: this.userfirst + ' ' + this.userlast
              },
            ]
          },
          {text: '\n\n'},
          {
            columns: [
              {
                width: 100,
                text: ' '
              },
              {
                width: 50,
                text: 'ลายเซนท์', bold: true
              },
              {
                width: 200,
                text: '...........................................'
              },
            ]
          },
          {text: '\n\n'},
          {
            columns: [
              {
                width: 100,
                text: ' '
              },
              {
                width: 75,
                text: 'สหกรณ์', bold: true
              },
              {
                width: 200,
                text: 'value11'
              },
            ]
          },
        ],
        styles: {
          header: {
            bold: true,
            fontSize: 15
          }
        },
        defaultStyle: {
          font: 'THNiramitAS'
        }
      };
      pdfMake.createPdf(docDefinition).open();
   });
  }
}

