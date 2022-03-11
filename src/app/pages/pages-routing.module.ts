import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccordionListComponent } from './page-accordion-list/page-accordion-list.component';
import { PagesButtonsComponent } from './pages-buttons/pages-buttons.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'accordion-list',
    // loadChildren: () => import('./page-accordion-list/page-accordion-list.module').then(m => m.PageAccordionListModule)
    component: PageAccordionListComponent,
  },
  {
    path: 'buttons',
    component: PagesButtonsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})


export class PagesRoutingModule { }
