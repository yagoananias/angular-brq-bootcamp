import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorFieldMessagesComponent } from './components/error-field-messages/error-field-messages.component';
import { CpfPipe } from './pipes/cpf.pipe';

@NgModule({
  declarations: [
    ErrorFieldMessagesComponent,
    CpfPipe
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

    ErrorFieldMessagesComponent,

    CpfPipe
  ]
})
export class SharedModule { }
