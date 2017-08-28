import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

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

  posts:Post[];

  edit: boolean = false;




  constructor(private dataService:DataService) { 
    console.log('constructor...');
  }

  ngOnInit() {
    this.name = 'john doe';
    this.age = 10;
    this.email="abc@gmail.com";
    this.address = {
      street: '31st',
      city: 'mumbai',
      state: 'maharashtra'
    };
    this.hobbies = ['movies','books','games'];
    console.log('ngOnInit ran .....');
    this.dataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    });
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

  toggleEdit(){
    this.edit = !this.edit;
  }

}

interface location {
  lat:string,
  long:string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number,
}