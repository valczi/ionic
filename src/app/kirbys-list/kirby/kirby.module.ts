import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KirbyPageRoutingModule } from './kirby-routing.module';

import { KirbyPage } from './Kirby.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KirbyPageRoutingModule
  ],
  declarations: [KirbyPage]
})
export class KirbyPageModule {}
