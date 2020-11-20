import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  artist: any[] = [];

  constructor( private spotify: SpotifyService) { }

  // tslint:disable-next-line: typedef
  search(termino: string) {
      // tslint:disable-next-line: no-unused-expression
      this.spotify.getArtist(termino)
        .subscribe((data: any) => {
          console.log(data);
          this.artist = data;
        });
      console.log(termino);
  }

}
