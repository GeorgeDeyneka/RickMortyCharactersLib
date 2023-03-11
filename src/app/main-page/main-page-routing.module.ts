import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharDetailsComponent } from './char-details/char-details.component';
import { CharListComponent } from './char-list/char-list.component';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CharListComponent,
      },
      {
        path: 'char-details/:id',
        pathMatch: 'full',
        component: CharDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
