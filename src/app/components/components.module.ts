import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AccordionListComponent } from './accordion-list/accordion-list.component';
import { ButtonsComponent } from './buttons/buttons.component';


export const components = [
  AccordionListComponent,
  ButtonsComponent
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [
    components
  ]
})
export class ComponentsModule { }
