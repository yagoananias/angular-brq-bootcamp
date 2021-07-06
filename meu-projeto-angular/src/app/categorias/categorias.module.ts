import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CategoriasListComponent } from './categorias-list/categorias-list.component';
import { CategoriasFormComponent } from './categorias-form/categorias-form.component';


@NgModule({
  declarations: [
    CategoriasListComponent,
    CategoriasFormComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    SharedModule
  ]
})
export class CategoriasModule { }
