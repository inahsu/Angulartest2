import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.title = 'Ina~~Gogo - Angular Application';

  }


}