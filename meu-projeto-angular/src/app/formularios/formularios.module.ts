import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosRoutingModule } from './formularios-routing.module';
import { MeuformComponent } from './meuform/meuform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorFieldMessagesComponent } from '../shared/error-field-messages/error-field-messages.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MeuformComponent
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FormulariosModule { }
