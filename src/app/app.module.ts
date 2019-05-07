import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; //Importa Il modulo http

import {
FormsModule,
  ReactiveFormsModule
 } from '@angular/forms';
import { SonglistComponent } from './songlist/songlist.component';
import { DettagliComponent } from './dettagli/dettagli.component';

@NgModule({
  declarations: [
    AppComponent,
    SonglistComponent,
    DettagliComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
