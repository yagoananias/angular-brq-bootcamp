import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudListComponent } from './crud-list/crud-list.component';

const routes: Routes = [
  { path:'crud-list', component: CrudListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
