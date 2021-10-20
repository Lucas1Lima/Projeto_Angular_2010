import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { TituloComponent } from './page/titulo/titulo.component';
import { SobrenosComponent } from './page/sobrenos/sobrenos.component';
import { ContatoComponent } from './page/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TituloComponent,
    SobrenosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
