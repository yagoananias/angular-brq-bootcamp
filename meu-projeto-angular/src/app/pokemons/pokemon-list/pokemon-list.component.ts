import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons : any = null;
  pokemonSelecionado : any = null;

  //private http = new HttpClient();
  //this é utilizado quando a variavel é declarada na classe
  //injeção do serviço
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAll().subscribe( (x) => {
        this.pokemons = x;
        console.log(this.pokemons);
    } );
   }

  selecionarPokemon( url : string ) {
    this.pokemonService.getOne(url).subscribe( (x) => {
      this.pokemonSelecionado = x;
    } );
  }

}
