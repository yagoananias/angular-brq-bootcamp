import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroComponent } from './primeiro/primeiro.component';

const routes: Routes = [
  { path:'', component: PrimeiroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
