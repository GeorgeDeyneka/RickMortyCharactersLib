import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackComponent } from './components/go-back/go-back.component';
import { RouterModule } from '@angular/router';
import { InputSearchComponent } from './components/input-search/input-search.component';

@NgModule({
  declarations: [GoBackComponent, InputSearchComponent],
  imports: [RouterModule, CommonModule],
  exports: [GoBackComponent, InputSearchComponent],
})
export class SharedModule {}
