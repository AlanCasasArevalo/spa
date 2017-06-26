import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from './../../services/heroes.service';

@Component({
  selector: 'myHeroeFiltered',
  templateUrl: './heroe-filtered.component.html',
  styleUrls: ['./heroe-filtered.component.css']
})
export class HeroeFilteredComponent implements OnInit {

  heroesFiltered: any[] = []
  termino: string

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService:HeroesService ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( parametros => {
      this.termino = parametros['termino']
      this.heroesFiltered = this._heroesService.buscarHeroes(parametros['termino'])
      console.log(this.heroesFiltered)
    })
  }
  
}
