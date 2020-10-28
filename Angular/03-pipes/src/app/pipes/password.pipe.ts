import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

    transform(value: string, args: boolean = true): string {
        return ( args ) ? '*'.repeat( value.length ) : value  ;
  }

}
