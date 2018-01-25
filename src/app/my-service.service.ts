import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { MyData } from './MyData';

@Injectable()
export class MyServiceService {
  data1: MyData[];
  constructor(private http: HttpClient) {}

  public getMyServiceData(): Observable<MyData[]> {
    return this.http.get<MyData[]>('http://172.22.8.3:8080/Practices/rest/message/heroList/5');
    /*  .subscribe(data => {
        this.data1 = data;
        console.log(this.data1);
      });
    return this.data1; */
  }

}
