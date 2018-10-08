import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DicasComponent } from './dicas/dicas.component';
import { BoutiqueSensualComponent } from './boutique-sensual/boutique-sensual.component';
import { ChaDeLingerieComponent } from './cha-de-lingerie/cha-de-lingerie.component';
import { LojaComponent } from './loja/loja.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DicasComponent,
    BoutiqueSensualComponent,
    ChaDeLingerieComponent,
    LojaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
