import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousesService } from '../services/houses.services';

@Component({
  selector: 'app-houses-card',
  templateUrl: './houses-card.component.html'
})
export class HousesCardComponent {

  house: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _HOUSESERVICES: HousesService
    ){
    this.activatedRoute.params.subscribe( params => {
      this.house = this._HOUSESERVICES.getHouse( params.id);
    });
   }

}
