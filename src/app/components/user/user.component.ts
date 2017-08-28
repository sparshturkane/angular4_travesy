import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // name:string = 'john doe';
  name:string;
  age:number;
  email:string;

  // object
  address:{
    street:string,
    city:string,
    state:string
  }

  //object initialized via interface
  location:location;

  // arrays
  hobbies:string[];




  constructor() { 
    console.log('constructor...');
  }

  ngOnInit() {
    this.name = 'john doe';
    this.age = 10;
    this.address = {
      street: '31st',
      city: 'mumbai',
      state: 'maharashtra'
    };
    this.hobbies = ['movies','books','games'];
    console.log('ngOnInit ran .....');
  }

  onClick(){
    console.log('you clicked me');
    this.name="sparsh";
    this.hobbies.push('new hobbie');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(i){
    console.log(i);
    this.hobbies.splice(i, 1);
  }

}

interface location {
  lat:string,
  long:string
}