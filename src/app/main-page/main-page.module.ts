import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { CharListComponent } from './char-list/char-list.component';
import { CharDetailsComponent } from './char-details/char-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainPageComponent, CharListComponent, CharDetailsComponent],
  imports: [CommonModule, MainPageRoutingModule, RouterModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
