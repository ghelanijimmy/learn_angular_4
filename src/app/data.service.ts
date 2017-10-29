import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

constructor() { }
  cars = [
    'ford',
    'chevy',
    'buick'
  ];

  myData(){
    return 'This is my data, man!';
  }
}
