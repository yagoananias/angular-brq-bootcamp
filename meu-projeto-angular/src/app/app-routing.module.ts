import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroComponent } from './primeiro/primeiro.component';

const routes: Routes = [
  { path:'', component: PrimeiroComponent },
  { path: 'pokemons',
    loadChildren: () => import('./pokemons/pokemons.module')
      .then(m => m.PokemonsModule) },
  { path: 'categorias',
  loadChildren: () => import('./categorias/categorias.module')
    .then(m => m.CategoriasModule) },
  { path: 'usuarios',
  loadChildren: () => import('./usuarios/usuarios.module')
    .then(m => m.UsuariosModule) },
  { path: 'form',
  loadChildren: () => import('./formularios/formularios.module')
    .then(m => m.FormulariosModule) },
  { path: 'crud',
  loadChildren: () => import('./crud/crud.module')
    .then(m => m.CrudModule) },
  { path: 'crud-form',
  loadChildren: () => import('./crud/crud.module')
    .then(m => m.CrudModule) },
  { path: 'produtos',
  loadChildren: () => import('./produtos/produtos.module')
    .then(m => m.ProdutosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
