import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit {

  @Input() usuariosFilho : any;
  @Output() usuarioEmmiter = new EventEmitter<string>();

  minhaClasse = 'card';

  constructor() {
    console.log(this.usuariosFilho);
  }

  ngOnInit(): void {
    console.log(this.usuariosFilho);
    this.usuarioEmmiter.next("oii");
  }

  clickButton() {
    this.usuarioEmmiter.next("oii");
  }

}
