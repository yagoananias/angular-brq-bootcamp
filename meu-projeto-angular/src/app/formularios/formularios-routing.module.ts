import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeuformComponent } from './meuform/meuform.component';

const routes: Routes = [
  { path:'meuform', component: MeuformComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulariosRoutingModule { }
