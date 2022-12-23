import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss'],
})
export class PokemonInfoComponent implements OnInit {
  id: any;
  pokemonData: any;

  constructor(
    private activeRoute: ActivatedRoute,
    public apiService: ApiService
  ) {
    this.activeRoute.params.subscribe((params) => {
      this.id = params;
      console.log(this.id);
    });
  }

  ngOnInit() {
    this.apiService.getPokemonById(this.id.id).subscribe((data) => {
      this.pokemonData = data;
    });
  }
}
