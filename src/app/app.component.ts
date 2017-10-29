import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
}
