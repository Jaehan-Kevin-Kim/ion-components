import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionListComponent } from './accordion-list.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: AccordionListComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
  ]
})
export class AccordionListModule { }
