import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'piyu-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: []
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 name:string = "hello";
 clicks:number = 0;
 clicks5x:number = 0;
 owner:string = "Priyanka";
 showText:boolean = true;
 childValue:string;

  public clickme():void{
    this.clicks++;
  }

  public GetSample():string{
    return 'This is a sample.';
  }
  public clickme5x(){
    this.clicks5x = this.clicks * 5;
  }
  public toggleMe():void{
    this.showText= !this.showText;
  }
  onChildChecked(event: string):void{
    this.childValue = event;
  }
}
