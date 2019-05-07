import { Component, OnInit,Input } from '@angular/core';
import { Song } from '../song.model';
@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.css']
})
export class SonglistComponent implements OnInit {
  @Input() canzo : Song[];
  selectedC : Song;
  constructor() { }

  ngOnInit() {
  }
  onClick(c : Song)
  {
    this.selectedC = c;
  }

}
