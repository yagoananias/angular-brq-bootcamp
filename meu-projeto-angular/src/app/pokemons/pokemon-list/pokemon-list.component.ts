import { HttpClient } from '@angular/common/http';
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
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://pokeapi.co/api/v2/pokemon").subscribe( (x) => {
        this.pokemons = x;
        console.log(this.pokemons);
    } );
   }

  selecionarPokemon( url : string ) {
    console.log(url);
    let i = this.http.get(url).subscribe( (x) => {
      this.pokemonSelecionado = x;
    } );
  }

}
