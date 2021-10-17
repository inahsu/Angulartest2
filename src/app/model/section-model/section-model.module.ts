import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SectionModelModule { 

  
  constructor(private title:string, private sectionContent:any){}


}
