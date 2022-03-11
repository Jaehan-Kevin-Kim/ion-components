import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-accordion-list',
  templateUrl: './accordion-list.component.html',
  styleUrls: ['./accordion-list.component.scss'],
})
export class AccordionListComponent {
  @ViewChild(IonAccordionGroup, { static: true }) accordionGroup: IonAccordionGroup;

  @Input() name: string = undefined;
  @Input() description: string = undefined;
  @Input() image: string = undefined;

  constructor() { }

  logAccordionValue() {
    console.log(this.accordionGroup.value);
  }

  toogleAccordion() {
    this.accordionGroup.value = 'colors';
  }

  closeAccordion() {
    this.accordionGroup.value = undefined;
  }

}
