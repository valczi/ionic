import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KirbyAddPageRoutingModule } from './kirby-add-routing.module';

import { KirbyAddPage } from './kirby-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KirbyAddPageRoutingModule
  ],
  declarations: [KirbyAddPage]
})
export class KirbyAddPageModule {}
