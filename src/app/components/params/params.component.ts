import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/types/data';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss'],
})
export class ParamsComponent {
  ids: Data[] = [
    { id: 1, name: 'Diego' },
    { id: 2, name: 'Davi' },
    { id: 3, name: 'Carmen' },
  ];

  constructor(public router: Router) {}
}
