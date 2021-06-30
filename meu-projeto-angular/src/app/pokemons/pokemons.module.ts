import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PokemonListComponent
  ]
})
export class PokemonsModule { }
