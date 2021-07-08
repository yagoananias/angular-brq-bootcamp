import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PokemonGuardService implements CanActivate {

  canAccess : boolean = false;
  constructor() { }

  canActivate() : boolean {
    return this.canAccess;
  }
}
