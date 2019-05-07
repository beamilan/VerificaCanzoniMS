import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../song.model';
@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent implements OnInit {
  @Input() cDettagli : Song;
  constructor() { }

  ngOnInit() {
  }

}
