import { Component, OnInit } from '@angular/core';
import { pokemon } from '../pokemon';
import {GetPokemonsService} from '../Services/get-pokemons.service'
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  show: boolean;
  pokemons: pokemon[] = [];
  selectedPokemon: pokemon;
  constructor(private getPokemonsService: GetPokemonsService) { }

  ngOnInit(): void {
    this.getPokemonsService.getPokemons().subscribe(pokemons => {
      this.pokemons = pokemons.slice(0, 5);
      console.log(this.pokemons);
      this.getPokemonsService.setPokimons(this.pokemons);
    })
  }

  showDetails(pokemon) {
    this.selectedPokemon = pokemon;
    this.show = true;
  }

  hideDetails() {
    this.show = false;
  }
}
