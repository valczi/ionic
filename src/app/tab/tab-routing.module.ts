import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
   // Dclaration de la route pour afficher le module TAB qui va gérer
    // nos autres routes
    path: 'tab',
    component: TabPage,
    //Déclaration des autres routes, ainsi que leurs PATHS
    children: [
      {
        path: 'kirbys',
        loadChildren: () => import('../kirbys-list/kirbys-list.module')
        .then( m => m.KirbysListPageModule)
      },

      {
        path: 'about',
        loadChildren: () => import('../about/about.module')
        .then( m => m.AboutPageModule)
      },

      {
        path: 'kirby-add',
        loadChildren: () => import('../kirbys-list/kirby-add/kirby-add.module')
        .then( m => m.KirbyAddPageModule)
      },

      {
        path: 'home',
        loadChildren: () => import('../home/home.module')
        .then( m => m.HomePageModule)
      },
    ]
  },

  {
    path:'',
    redirectTo: '/tab/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
