import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  url = 'https://pokeapi.co/api/v2/pokemon';
  pokemons : any = null;

  //private http = new HttpClient();
  //this é utilizado quando a variavel é declarada na classe
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    let i =  this.http.get(this.url)
       .subscribe(  (x) => {
         this.pokemons = x;
         console.log(this.pokemons)
       } );

   }

}
