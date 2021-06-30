import { PokemonsModule } from './pokemons/pokemons.module';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UsuariosModule,
    NgbModule,
    PokemonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
