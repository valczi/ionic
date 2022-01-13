import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KirbysListPage } from './kirbys-list.page';

const routes: Routes = [
  {
    path: '',
    component: KirbysListPage
  },

  {
    path: 'new',
    loadChildren: () => import('./kirby-add/kirby-add.module').then( m => m.KirbyAddPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./kirby/Kirby.module').then( m => m.KirbyPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KirbysListPageRoutingModule {}
