import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousesService } from '../services/houses.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  houses: any[] = [];
  termino: string;
  router: any;

  constructor( private activatedRoute: ActivatedRoute,
               // tslint:disable-next-line: variable-name
               private  _houseService: HousesService,
    ) {}


  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      this.termino =  params.termino;
      // tslint:disable-next-line: no-string-literal
      this.houses = this._houseService.searchHouse( params['termino'] );
      console.log(this.houses);
    });

  }

   // tslint:disable-next-line: typedef
   seeHouses( idx: number){
    this.router.navigate( ['/house', idx] );
}
}
