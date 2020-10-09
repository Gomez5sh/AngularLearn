// imports
import { Component } from '@angular/core';

// Create componet body
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
})
export class BodyComponent {
    show = true;

    frase: any = {
        mensaje: 'In the game of thrones, you win or you die...',
        autor: 'Cersei Lannister',
    };

    characters: string[] = ['Jhon Snow', 'Tyrion Lanister', 'Arya Stark'];
}