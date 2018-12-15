import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/service/API/beefgrading/system.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  key;
  items = {
    $key: '',
    name: '',
    daynoti: ''
  };
  data: any;

  public namesahagorn;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private _route: ActivatedRoute,
    private router: Router,
    private apisystem: SystemService,
  ) { }

  ngOnInit() {
    this.apisystem.showData().subscribe(data => {
      this.data = Object.values(data);
      for (let i = 0; i < Object.values(data).length; i++) {
        this.data[i].key = Object.keys(data)[i];
      }
    });
  }

  addForm(d: NgForm) {
    this.apisystem.addDataform(d.value).subscribe();
    this.router.navigate(['/configsys']);
  }

  editForm(dd: NgForm, key) {
    console.log(key, dd.value);
    this.apisystem.editData(key, dd.value).subscribe();
    this.ngOnInit();
  }

  onEdit($key, name) {
    this.items.$key = $key;
    this.items.name = name;
  }
  onEditnoti($key, name, daynoti) {
    this.items.$key = $key;
    this.items.name = name;
    this.items.daynoti = daynoti;
  }
}
