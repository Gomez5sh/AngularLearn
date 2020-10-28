import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({
  name: 'securedom'
})
export class SecuredomPipe implements PipeTransform {

    constructor( private dom: DomSanitizer) {}
  transform(value: string, ...args: unknown[]): SafeResourceUrl {
      return this.dom.bypassSecurityTrustResourceUrl(value);
  }

}
