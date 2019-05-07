import { Component } from '@angular/core';
import { AlbumList } from './albumList.model';
import { Album } from './album.model';
import { Song } from './song.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = "Benvenuti al canzoniere";
  albums = AlbumList;
  selectedAlbum: Album = AlbumList[0];
  songList: Song[];
  obsCanzone: Observable<Song[]>;
  canzoneData: Song[];

  constructor(public http:HttpClient) {this.makeTypedRequest(); }

   makeTypedRequest(): void {
    //oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe
    this.obsCanzone = this.http.get<Song[]>('https://my-json-server.typicode.com/malizia-g/hotel/songlist');
    this.obsCanzone.subscribe(data => { this.canzoneData = data;  });
  }

  ngOnInit() {
    this.songList = new Array <Song>();
  }


  //Controllo se l'id dell'album selezionato è nell'elenco.
  //In questo caso imposto la variabile selectedRoom
  onChange(a_id: number) {
    AlbumList.forEach(
      (album: Album) => {
        if (album.id == a_id) {
          this.selectedAlbum = album;
          console.log(this.selectedAlbum);
        }
      }
    )
  }

  onClick(t: HTMLInputElement  ,d : HTMLInputElement, l :HTMLInputElement ) : boolean
  {
    this.songList.push(new Song(this.selectedAlbum, new Date(d.value), Number(l.value), t.value));
    return false;
  }

}

