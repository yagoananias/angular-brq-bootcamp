import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { CpfPipe } from './cpf.pipe';



@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuarioDetalheComponent,
    CpfPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsuarioListComponent,
    UsuarioDetalheComponent
  ]
})
export class UsuariosModule { }
