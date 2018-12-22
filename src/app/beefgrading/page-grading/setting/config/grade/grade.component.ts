import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css'],
  preserveWhitespaces: false
})
export class GradeComponent implements OnInit {
  val: string;
  favoriteColor = 'red';
  list = [
    { value1: 'blue' },
    { value2: 'red' },
    { value3: 'green' },
    { value4: 'orange' }
  ];

  marbling = 1;

  constructor() { }

  ngOnInit() {
  }

}
