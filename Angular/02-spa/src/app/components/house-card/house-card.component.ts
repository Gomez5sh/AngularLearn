import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
})
export class HouseCardComponent implements OnInit {

  @Input() item: any = {};
  @Input() idx: number;

  @Output() houseSelector: EventEmitter <number>;

  constructor( private router: Router ) {
    this.houseSelector = new EventEmitter();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  seeHouses(){
    this.houseSelector.emit( this.idx);
}
}
