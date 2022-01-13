import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KirbyPage } from './Kirby.page';

const routes: Routes = [
  {
    path: '',
    component: KirbyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KirbyPageRoutingModule {}
