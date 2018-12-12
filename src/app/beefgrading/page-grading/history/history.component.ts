import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  pdfimage;
  key;

  constructor(
    private api: SumgradingService,
    private _route: ActivatedRoute,
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
    function getDataUri(url, callback) {
      const image = new Image();

      image.onload = function () {
          const canvas = document.createElement('canvas');
          canvas.width = image.width; // or 'width' if you want a special/scaled size
          canvas.height = image.height; // or 'height' if you want a special/scaled size

          canvas.getContext('2d').drawImage(image, 0, 0);

          // Get raw image data
          callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));

      };

      image.src = url;
  }

  // Usage
  getDataUri('/logo.png', function(dataUri) {
      // Do whatever you'd like with the Data URI!
  });

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
              image: this.pdfimage,
              width: 50,
              height: 50,
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

