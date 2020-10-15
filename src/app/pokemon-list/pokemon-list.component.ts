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
  editMode: boolean;
  hidePrev: boolean;
  hideNext: boolean;
  pokemons: pokemon[] = [];
  allPokemons: pokemon[] = [];
  selectedPokemon: pokemon;
  startIndex: number = 0;
  lastIndex: number = 9;
  constructor(private getPokemonsService: GetPokemonsService) { }

  ngOnInit(): void {
    this.getPokemonsService.getPokemons().subscribe(pokemons => {
      this.getPokemonsService.setPokimons(pokemons);
      this.allPokemons = pokemons;
      this.pokemons = pokemons.slice(this.startIndex, this.lastIndex);
    })
  }

  showDetails(pokemon) {
    this.selectedPokemon = pokemon;
    this.show = true;
  }

  prevPage() {
    this.startIndex-=9;
    this.lastIndex-=9;
    this.pokemons = this.allPokemons.slice(this.startIndex, this.lastIndex);
    if (this.startIndex == 0) {
      this.hidePrev = true;
    }
  }

  nextPage() {
    this.startIndex+=9;
    this.lastIndex+=9;
    this.pokemons = this.allPokemons.slice(this.startIndex, this.lastIndex);
    if (this.lastIndex >= this.allPokemons.length) {
      this.hideNext = true;
    }
  }

  hideDetails() {
    this.show = false;
    this.editMode = false;
    this.allPokemons = this.getPokemonsService.getPokemonsList();
    this.showFirstPage();
  }

  editPokemon(pokemon) {
    this.show = true;
    this.editMode = true;
    this.selectedPokemon = pokemon;
  }

  delete(id: number) {
    for (let i = 0; i < this.allPokemons.length; i++) {
      if (this.pokemons[i].id == id) {
        this.allPokemons.splice(i, 1);
        this.getPokemonsService.setPokimons(this.allPokemons);
        this.showFirstPage();
        break;
      }
    }
  }

  showFirstPage() {
    this.startIndex = 0;
    this.lastIndex = 9;
    this.pokemons = this.allPokemons.slice(this.startIndex, this.lastIndex);
  }
}
