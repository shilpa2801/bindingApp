import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-bind',
  templateUrl: './practice-bind.component.html',
  styleUrls: ['./practice-bind.component.css']
})
export class PracticeBindComponent implements OnInit {
  username = "Ng user";
  displayName = "";
  status="";
  constructor() { }

  ngOnInit() {
  }
  reset(){
  	this.username='';
    this.displayName='';
  }

  addUserName(){
    this.status = "User is addded";
  }
  onUpdate(event: Event){
     console.log(event);
     this.displayName = (<HTMLInputElement>event.target).value;
  }
}
