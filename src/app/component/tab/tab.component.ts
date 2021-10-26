import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  section: Array<any> = [];
  openSideBar:boolean = true;
  oriSize:Number=100;
  openSize:Number=500;

  unit:string="px";
  sideBarSize:string="100px";

  constructor() {
    this.sideBarSize = this.openSideBar? this.openSize + this.unit:this.oriSize + this.unit;
  }

  changeSize(){
    this.openSideBar = !this.openSideBar;
    this.sideBarSize = this.openSideBar? this.openSize + this.unit:this.oriSize + this.unit;
  }

}
