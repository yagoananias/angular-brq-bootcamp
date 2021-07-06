import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorFieldMessagesComponent } from './error-field-messages/error-field-messages.component';



@NgModule({
  declarations: [
    ErrorFieldMessagesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    ErrorFieldMessagesComponent
  ]
})
export class SharedModule { }
