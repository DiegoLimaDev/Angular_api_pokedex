import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  pokemonList: any;

  pokemonDataById = (id: string) => {
    this.router.navigate([`pokemonList/${id}`]);
  };

  constructor(public apiService: ApiService, private router: Router) {
    this.apiService.getPokemon().subscribe((data) => {
      this.pokemonList = data;
    });
  }
}
