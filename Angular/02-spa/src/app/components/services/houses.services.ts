import { Injectable } from '@angular/core';

@Injectable()
export class HousesService {
    private houses: any[] = [
        {
          nombre: 'Aquaman',
          bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
          img: '../../../assets//img/PNG/Stark.png',
          aparicion: '1941-11-01',
          casa: 'DC',
        },
         {
          nombre: 'Aquaman',
          bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
          img: '../../../assets//img/PNG/Stark.png',
          aparicion: '1941-11-01',
          casa: 'DC',
        },
         {
          nombre: 'Aquaman',
          bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
          img: '../../../assets//img/PNG/Stark.png',
          aparicion: '1941-11-01',
          casa: 'DC',
        },
         {
          nombre: 'Aquaman',
          bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
          img: '../../../assets//img/PNG/Stark.png',
          aparicion: '1941-11-01',
          casa: 'DC',
        },
         {
          nombre: 'Aquaman',
          bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
          img: '../../../assets//img/PNG/Stark.png',
          aparicion: '1941-11-01',
          casa: 'DC',
        },
         {
          nombre: 'Aquaman',
          bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
          img: '../../../assets//img/PNG/Stark.png',
          aparicion: '1941-11-01',
          casa: 'DC',
        },
         {
          nombre: 'Aquaman',
          bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
          img: '../../../assets//img/PNG/Stark.png',
          aparicion: '1941-11-01',
          casa: 'DC',
        },
         {
          nombre: 'Aquaman',
          bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
          img: '../../../assets//img/PNG/Stark.png',
          aparicion: '1941-11-01',
          casa: 'DC',
        },
      ];

    constructor(){
        console.log('service ON');
    }

    // tslint:disable-next-line: typedef
    getHouses(){
        return this.houses;
    }
}
