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
  editMode: boolean;
  @Input() pokemon: pokemon;
  @Input() show: boolean;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(private getPokemonsService: GetPokemonsService) { }

  ngOnInit(): void {
    //this.pokemon = this.getPokemonsService.getPokemonById(this.id);
  }

  closeDetails(){
    this.show = false;
    this.editMode = false;
    this.onClose.emit(this.show);
  }
}
