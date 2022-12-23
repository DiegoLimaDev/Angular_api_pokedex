import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ParamsComponent } from './components/params/params.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { SeeDataComponent } from './components/see-data/see-data.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'firstPage', component: FirstPageComponent },
  { path: 'secondPage', component: SecondPageComponent },
  { path: 'params', component: ParamsComponent },
  { path: 'seeData/:id', component: SeeDataComponent },
  { path: 'pokemonList', component: PokemonListComponent },
  {
    path: 'pokemonList/:id',
    loadChildren: () =>
      import('./components/pokemon-info/pokemon-info.module').then(
        (m) => m.PokemonInfoModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
