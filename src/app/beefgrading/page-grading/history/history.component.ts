import { Component, OnInit } from '@angular/core';
import { SumgradingService } from 'src/app/service/API/beefgrading/sumgrading.service';
import { LyTheme2 } from '@alyle/ui';
import swal from 'sweetalert2';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
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

  constructor(
    private api: SumgradingService,
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
  }

  ngOnInit() {
    this.api.showData().subscribe(data => {
      this.data = Object.values(data);
      for (let i = 0; i < Object.values(data).length; i++) {
        this.data[i].key = Object.keys(data)[i];
      }
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

  printPDF() {
    const docDefinition = {
      content: [
        {
          columns: [
            {
              text: 'ใบรายงานผลการตัดเกรด', fontSize: 24, bold: true, alignment: 'center'
            }
          ]
        },
        {
          columns: [
            {
              width: 100,
              fontSize: 9,
              text: ''
            },
            { text: [
              'รหัสวัว',
              'รหัสซากซ้าย',
              'รหัสซากขาว',
            ]
            }
          ]
        }
      ],
      defaultStyle: {
        font: 'THNiramitAS'
      }
    };
    pdfMake.createPdf(docDefinition).open();
  }

}

export class Listitemcattle {
  id: string;
  left: string;
  right: string;
  datekil: string;
  datedry: string;
  dateready: string;
  wleft: string;
  wright: string;
  roomdry: string;
  owncattle: string;
  status: string;
  picture: string;

  date_sum: string;
  datecuted: string;
  grade_ex: string;
  grade_sys: string;
  grade_con: string;

  fn_ex1: string;
  fn_ex2: string;
  fn_ex3: string;
  fn_ex4: string;
  fn_ex5: string;
  ln_ex1: string;
  ln_ex2: string;
  ln_ex3: string;
  ln_ex4: string;
  ln_ex5: string;

  sys_grage_sum_fn: string;
  sys_grage_sum_ln: string;
}
