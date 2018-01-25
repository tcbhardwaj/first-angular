import {Component, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';
import { MyData } from '../MyData';
import { MyServiceService } from '../my-service.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {
  data: string;
  data1: MyData[];

  constructor(private service: MyServiceService) {}

  ngOnInit() {
    this.data = 'test data';
  }

  click(data: string): void {
    this.service.getMyServiceData().subscribe(heroes => this.data1 = heroes);
    console.log('data1:', this.data1);
  }


}
