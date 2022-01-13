import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KirbyAddPage } from './kirby-add.page';

const routes: Routes = [
  {
    path: '',
    component: KirbyAddPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KirbyAddPageRoutingModule {}
