import { PokemonGuardService } from './../../shared/services/pokemon-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validar',
  templateUrl: './validar.component.html',
  styleUrls: ['./validar.component.css']
})
export class ValidarComponent implements OnInit {

  constructor(private pokemonGuard : PokemonGuardService) { }

  ngOnInit(): void {
  }

  onLiberarClick() {
    //this.pokemonGuard.canAccess = true;
    this.pokemonGuard.canAccess = !this.pokemonGuard.canAccess;
  }

}
