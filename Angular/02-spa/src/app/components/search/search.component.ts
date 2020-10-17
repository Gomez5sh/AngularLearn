import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousesService } from '../services/houses.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  houses: any[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               // tslint:disable-next-line: variable-name
               private  _housesServices: HousesService,
    ) {}

  ngOnInit(): void {
  this.activatedRoute.params.subscribe( params => {
    this.houses = this._housesServices.searchHouse( params.text );
  });

  }

}
