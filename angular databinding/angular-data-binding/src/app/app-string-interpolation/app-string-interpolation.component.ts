import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-string-interpolation',
  templateUrl: './app-string-interpolation.component.html',
  styleUrls: ['./app-string-interpolation.component.css']
})
export class AppStringInterpolationComponent implements OnInit {

  constructor() { }
  name:string ="arun";

  ngOnInit(): void {
  }
  display() {
    return "Welcome "+this.name;
  }
  
  add(a:number,b:number):number{
    return a+b;
  }
}

