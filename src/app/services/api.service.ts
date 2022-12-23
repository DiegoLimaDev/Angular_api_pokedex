import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api = `https://pokemon-origins.gitlab.io/api/pokemons/EN/`;
  apiImage = `https://pokemon-origins.gitlab.io/api/images/pokemons/animated/`;

  public getPokemon = () => {
    return this.httpClient.get<any>(this.api);
  };

  public getPokemonById = (id: number) => {
    return this.httpClient.get<any>(this.api + id);
  };

  getPokemonImg = (id: number) => {
    return `https://pokemon-origins.gitlab.io/api/images/pokemons/animated/${id}.gif`;
  };

  constructor(private httpClient: HttpClient) {}
}
