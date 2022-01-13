import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KirbysListPageRoutingModule } from './kirbys-list-routing.module';

import { KirbysListPage } from './kirbys-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KirbysListPageRoutingModule
  ],
  declarations: [KirbysListPage]
})
export class KirbysListPageModule {}
