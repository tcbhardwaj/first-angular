import {Component, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';


@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {
  data: string;

  constructor() {}

  ngOnInit() {
    this.data = 'test data';
  }

  click(data: string): void {
    this.data = data;
  }

}
