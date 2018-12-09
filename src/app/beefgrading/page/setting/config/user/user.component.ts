import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/API/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  data: any;
  items = {
    $key: '',
    fname: '',
    lname: '',
    email: '',
    privilege_id: '',
    users: ''
  };

  constructor(private api: UsersService) {

  }

  ngOnInit() {
    this.api.showData().subscribe(data => {
      this.data = Object.values(data);
      for (let i = 0; i < Object.values(data).length; i++) {
        this.data[i].key = Object.keys(data)[i];
      }
    });
  }

}
