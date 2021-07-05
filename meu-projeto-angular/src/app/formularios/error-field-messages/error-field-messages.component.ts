import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'error-field-messages',
  templateUrl: './error-field-messages.component.html',
  styleUrls: ['./error-field-messages.component.css']
})
export class ErrorFieldMessagesComponent implements OnInit {

  //variavel filho que recebe valores do pai
  @Input() field : FormControl;
  @Input() nome : any;

  constructor() { }

  ngOnInit(): void {
  }

}
