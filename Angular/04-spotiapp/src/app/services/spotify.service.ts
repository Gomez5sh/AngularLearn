import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

    constructor( private http: HttpClient ) { }

    // tslint:disable-next-line: typedef
    getQuery( query: string){
        const url = `https://api.spotify.com/v1/${ query }`;

        const headers = new HttpHeaders({
            Authorization: 'Bearer BQBSTYkN1c5hIkSxWAImy3wOYAj9EpfwyDksmYCSuwoMnrfne973a0Vhd_OdFZ81QWCuL34GUiazkkubOto'
        });

        return this.http.get(url, { headers });
    }

    // tslint:disable-next-line: typedef
    getNewReleases(){
            return this.getQuery('browse/new-releases')
            .pipe( map( (data: any) => data.albums.items ));
    }

    // tslint:disable-next-line: typedef
    getArtist(termino: string){
        return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
        .pipe( map((data: any) => data.artists.items ));
    }
}
