import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { PageAccordionListComponent } from './page-accordion-list/page-accordion-list.component';
import { PagesButtonsComponent } from './pages-buttons/pages-buttons.component';
import { PagesRoutingModule } from './pages-routing.module';


export const pagesComponents = [
  PageAccordionListComponent,
  PagesButtonsComponent
];

@NgModule({
  declarations: [pagesComponents],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesRoutingModule,
    ComponentsModule
  ],
})

export class PagesModule { }
