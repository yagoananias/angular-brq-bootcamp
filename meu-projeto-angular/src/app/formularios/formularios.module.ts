import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosRoutingModule } from './formularios-routing.module';
import { MeuformComponent } from './meuform/meuform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorFieldMessagesComponent } from './error-field-messages/error-field-messages.component';


@NgModule({
  declarations: [
    MeuformComponent,
    ErrorFieldMessagesComponent
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormulariosModule { }
