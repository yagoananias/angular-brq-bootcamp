import { FormulariosModule } from './formularios/formularios.module';
import { PokemonsModule } from './pokemons/pokemons.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsuariosModule,
    NgbModule,
    PokemonsModule,
    FormulariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
