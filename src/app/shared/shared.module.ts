import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackComponent } from './components/go-back/go-back.component';
import { RouterModule } from '@angular/router';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './components/pagination/pagination.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    GoBackComponent,
    InputSearchComponent,
    PaginationComponent,
    HeaderComponent,
  ],
  imports: [RouterModule, CommonModule, FormsModule],
  exports: [
    GoBackComponent,
    InputSearchComponent,
    PaginationComponent,
    HeaderComponent,
  ],
})
export class SharedModule {}
