import { Component, OnInit } from '@angular/core';
import { AboutcattleService } from './../../../service/API/beefgrading/aboutcattle.service';
import { LyTheme2 } from '@alyle/ui';
import swal from 'sweetalert2';

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
  selector: 'app-aboutcattle',
  templateUrl: './aboutcattle.component.html',
  styleUrls: ['./aboutcattle.component.css']
})
export class AboutcattleComponent implements OnInit {
  classes = this.theme.addStyleSheet(styles);

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
  count;

  data: any;
  items = {
    $key: '',
    id: '',
    left: '',
    right: '',
    datekill: '',
    datedry: '',
    dateready: '',
    wleft: '',
    wright: '',
    roomdry: '',
    firstown: '',
    lastown: '',
    status: ''
  };

  constructor(private api: AboutcattleService,
    private theme: LyTheme2) {

  }

  ngOnInit() {
    this.api.showData().subscribe(data => {
      this.data = Object.values(data);
      for (let i = 0; i < Object.values(data).length; i++) {
        this.data[i].key = Object.keys(data)[i];
      }
    });
  }

  myFunction() {
    let input, filter, tbody, tr, td, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    tbody = document.getElementById('myUL');
    tr = tbody.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[0];
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
    }
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
        for (let i = 0; i < this.idcheck.length; i++) {
          console.log(this.idcheck[i]);
          this.api.removeData(this.idcheck[i]).subscribe();
        }
        swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
        setTimeout(() => location.reload(), 500);
      }
    });
  }
}
