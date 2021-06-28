import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios = [
    { id : 1, nome : "Usuário 1", email: "usu1@usuario.com" },
    { id : 2, nome : "Usuário 2", email: "usu2@usuario.com" },
    { id : 3, nome : "Usuário 3", email: "usu3@usuario.com" }
  ]

  constructor() {
   }

  ngOnInit(): void {
  }

}
