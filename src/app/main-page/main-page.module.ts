import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { CharListComponent } from './char-list/char-list.component';
import { CharDetailsComponent } from './char-details/char-details.component';
import { RouterModule } from '@angular/router';
import { CharItemComponent } from './char-item/char-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainPageComponent,
    CharListComponent,
    CharDetailsComponent,
    CharItemComponent,
  ],
  imports: [CommonModule, RouterModule, MainPageRoutingModule, SharedModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
