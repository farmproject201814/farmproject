import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-store-t3',
  templateUrl: './store-t3.component.html',
  styleUrls: ['./store-t3.component.css']
})
export class StoreT3Component implements OnInit {

  constructor() { }

  ngOnInit() {
    const d1 = new Date('2018-12-14');
    const d2 = new Date('2018-12-20');
    console.log(Number(d1));
    const d3 = new Date(Number(d1));
    console.log(d3);
    firebase.database().ref().child('store/menu1/aging').orderByChild('date').startAt(Number(d1)).endAt(Number(d2)).once('value', d => {
      console.log(d.val());
    });
  }

}
