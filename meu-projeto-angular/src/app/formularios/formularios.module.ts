import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosRoutingModule } from './formularios-routing.module';
import { MeuformComponent } from './meuform/meuform.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MeuformComponent
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormulariosModule { }
