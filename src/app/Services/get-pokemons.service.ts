import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { pokemon } from '../pokemon';

@Injectable({
  providedIn: 'root'
})
export class GetPokemonsService {
  pokemons:pokemon[];
  url: string = '../../assets/pokemon.json';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get(this.url);
  }

  setPokimons(pokemons) {
    this.pokemons = pokemons;
  }
  
  getPokemonsList() {
    return this.pokemons;
  }

  getPokemonById(id: number): pokemon {
    let pokemon: pokemon;
    this.pokemons.forEach((p) => {
      if (p.id = id) {
        pokemon = p;
      }
    })
    return pokemon;
  }
}
