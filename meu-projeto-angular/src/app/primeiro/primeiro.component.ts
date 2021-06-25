import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  nome = "Yaguim";

  constructor() { }

  mostrarMensagem() {
    alert("boa pa nois");
  }

  ngOnInit(): void {
  }

}
