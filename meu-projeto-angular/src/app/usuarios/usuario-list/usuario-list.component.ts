import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  @Output() usuarioEmmiter = new EventEmitter<string>();

  usuarioSelecionado : any = null;

  usuarios = [
    { id : 1, nome : "Usuário 1", email: "usu1@usuario.com" },
    { id : 2, nome : "Usuário 2", email: "usu2@usuario.com" },
    { id : 3, nome : "Usuário 3", email: "usu3@usuario.com" }
  ]

  constructor() {
   }

  ngOnInit(): void {
  }

  onUsuarioEmitter(valor : string) {
    console.log("Output properties " + valor);
  }

  onSelecionarClick(usuario: any) {
    console.log(usuario)
    this.usuarioSelecionado = usuario;
  }

}
