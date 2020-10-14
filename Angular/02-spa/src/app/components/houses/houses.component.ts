import { Component, OnInit } from '@angular/core';
import { HousesService, Houses } from '../services/houses.services';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
})
export class HousesComponent implements OnInit {

  houses: Houses[] = [];

  constructor(private _HOUSESERVICES: HousesService,
              private router: Router,
              ) { }

  ngOnInit(): Houses[] {
    return this.houses = this._HOUSESERVICES.getHouses();
    }
    // tslint:disable-next-line: typedef
    seeHouses( idx: number){
      this.router.navigate( ['/house', idx] );
  }
}


