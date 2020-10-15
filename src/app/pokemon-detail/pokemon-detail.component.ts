import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { pokemon } from '../pokemon';
import {GetPokemonsService} from '../Services/get-pokemons.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  id: number;
  name: string;
  hp: string;
  attack: string;
  defend: string;
  pokemons: pokemon[];
  @Input() pokemon: pokemon;
  @Input() show: boolean;
  @Input() editMode: boolean;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(private getPokemonsService: GetPokemonsService) { }

  ngOnInit(): void {
  }

  closeDetails(){
    this.show = false;
    this.editMode = false;
    this.onClose.emit(this.show);
  }

  edit() {
    this.pokemons = this.getPokemonsService.getPokemonsList();
    for (let i = 0; i < this.pokemons.length; i++) {
      if (this.pokemons[i].id == this.pokemon.id) {
        this.pokemons[i].name = this.pokemon.name;
        this.pokemons[i].hp = Number(this.pokemon.hp);
        this.pokemons[i].attack = Number(this.pokemon.attack);
        this.pokemons[i].defend = Number(this.pokemon.defend);
      }
    }
    this.getPokemonsService.setPokimons(this.pokemons);
  }
}
