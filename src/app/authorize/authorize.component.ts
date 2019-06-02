import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  textBoxVal:string="";
  checkVal:string="Priyanka";
  checkBool:boolean = false;

  public checkNow(){
    if(this.checkVal == this.textBoxVal){
      this.checkBool = true;
    }else {
      this.checkBool = false;
    }
  }

}
