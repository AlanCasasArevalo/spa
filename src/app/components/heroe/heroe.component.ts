import { Component } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'myHeroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent{

  heroe:any = {}

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {

    this.activatedRoute.params.subscribe(parametros => {
      this.heroe = this._heroesService.getHeroe(parametros['id'])
      console.log(this.heroe)
    })
  }

}
