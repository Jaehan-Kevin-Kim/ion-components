import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  // {
  //   path: 'accordion-list',
  //   loadChildren: () => import('./pages/page-accordion-list/page-accordion-list.module').then(m => m.PageAccordionListModule)
  // },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages-routing.module').then(m => m.PagesRoutingModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
