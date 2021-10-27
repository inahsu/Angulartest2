import { Component } from '@angular/core';

@Component({
  selector: '[app-section]',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  sectionTitle: string = "section2";
  sectionContent: string = ` <p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolorum ratione. Aut, officiis obcaecati. Facere, eos excepturi maxime repudiandae aliquid, accusantium doloribus facilis cupiditate, sit ratione reiciendis blanditiis optio natus.
</p>`;

  constructor() { }

  private openSection: boolean = false;
  public display: string = "none";

  whenTouch() {
    this.openSection = !this.openSection;

    this.display = this.openSection ? "block" : "none";



  }

}
