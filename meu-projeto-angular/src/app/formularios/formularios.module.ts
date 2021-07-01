import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosRoutingModule } from './formularios-routing.module';
import { MeuformComponent } from './meuform/meuform.component';


@NgModule({
  declarations: [
    MeuformComponent
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule
  ]
})
export class FormulariosModule { }
