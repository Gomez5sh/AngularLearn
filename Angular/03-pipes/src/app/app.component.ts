import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    name      : string = "Jack Skellington";
    name2     : string = "EmmAnuEL gOmeZ MaRtInEZ";
    arr2      : string [] = ['Oogie Boogie', 'Doctor Finklenstein', 'Doctor Finklenstein', 'Sally', 'Demonio arlequín',];
    PI        : number = Math.PI;
    percentage: number = 0.589;
    pay       : number = 1234.5;
    arr       = [0,1,2,3,4,5,6,7,8,9];
    date      : Date = new Date();
    activate  : boolean = true;
    videoUrl  : string = 'https://www.youtube.com/embed/vHLgob-PpIk?start=32';

    promiseValue = new Promise<string>((res) => {
        setTimeout(() =>{
            res('Data is here babe');
        }, 4500)
    });


    obj       ={
        name    : 'Jack Skellington',
        race    :'Skeleton',
        movie   : {
            First  : 'The Nightmare Before Christmas',
            Created: 'Tim Burton',
            Voiced : 'Chris Sarandon (speaking), Danny Elfman (singing)',

        }
    }
}

