import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() passed:string;

  @Output() checkerCLicked: EventEmitter<string> = new EventEmitter<string>();

  textBoxVal:string="";
  checkVal:string="Priyanka";
  checkBool:boolean = false;
  names:string[] = ["suku","piyu","Sukanta"];
  //backgrd:string = "backgrd";
  displayMessage:string = "This is a sample message to display";

  public checkNow(){
    if(this.checkVal == this.textBoxVal){
      this.checkBool = true;
    }else {
      this.checkBool = false;
    }
    this.checkerCLicked.emit(`The value in textbox is : ${this.textBoxVal}`);
  }

}
