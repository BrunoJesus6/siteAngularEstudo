import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaInicialComponent } from './Paginas/pagina-inicial/pagina-inicial.component';
import { AkiraComponent } from './Paginas/akira/akira.component';
import { GachiakutaComponent } from './Paginas/gachiakuta/gachiakuta.component';
import { OnepieceComponent } from './Paginas/onepiece/onepiece.component';
import { JujutsuKaisenComponent } from './Paginas/jujutsu-kaisen/jujutsu-kaisen.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    AkiraComponent,
    GachiakutaComponent,
    OnepieceComponent,
    JujutsuKaisenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
