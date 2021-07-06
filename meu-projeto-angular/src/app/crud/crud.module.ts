import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CrudListComponent } from './crud-list/crud-list.component';
import { CrudFormComponent } from './crud-form/crud-form.component';


@NgModule({
  declarations: [
    CrudListComponent,
    CrudFormComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    SharedModule
  ]
})
export class CrudModule { }
