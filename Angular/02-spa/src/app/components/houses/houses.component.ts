import { Component, OnInit } from '@angular/core';
import { HousesService } from '../services/houses.services';
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
})
export class HousesComponent implements OnInit {

  houses: any[] = [];

  constructor(private _HOUSESERVICES: HousesService) { }

  ngOnInit(): void {
    this.houses = this._HOUSESERVICES.getHouses();
  }

}

interface House{
 //crear la interface 
}
