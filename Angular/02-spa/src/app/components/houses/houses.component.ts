import { Component, OnInit } from '@angular/core';
import { HousesService, Houses } from '../services/houses.services';
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
})
export class HousesComponent implements OnInit {

  houses: Houses[] = [];

  constructor(private _HOUSESERVICES: HousesService) { }

  ngOnInit(): Houses[] {
    this.houses = this._HOUSESERVICES.getHouses();
  }

}


