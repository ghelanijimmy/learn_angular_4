import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAwesomeAnimaton', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1)',
      })),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35px)', offset: .5}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1}),
      ]))),
    ]),
  ]
})
export class AppComponent {
  myObject = {
    gender: 'male',
    age: 33,
    location: 'Canada'
  }

  myArr = ["Jimmy", "Aliya", "Rafiki"];

  angularLogo = 'https://angular.io/assets/images/logos/angular/angular.png';
  buttonStatus = 'enabled';

  myEvent(event){
    console.log(event);
  }
  title = "My App";
  titleClass = 'red-title';

  titleClasses = {
    'red-title': true,
    'large-title': true
  }
  titleStyle = true;
  titleStyles = {
    'color': 'salon',
    'font-size': '1em'
  }
  constructor(private dataService:DataService){

  }

  someProperty:string = "";

  ngOnInit(){
    console.log(this.dataService.cars);
    this.someProperty = this.dataService.myData();
  }

  state:string = 'small';

  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
