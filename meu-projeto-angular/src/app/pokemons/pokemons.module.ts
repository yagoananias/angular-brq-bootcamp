import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetalheComponent } from './pokemon-detalhe/pokemon-detalhe.component';
import { PokemonsRoutingModule } from './pokemons-routing.module';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetalheComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PokemonsRoutingModule
  ],
  exports: [
    PokemonListComponent,
    PokemonDetalheComponent
  ]
})
export class PokemonsModule { }
