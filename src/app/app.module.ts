import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { Ejer1Component } from './ejercicios/ejer1/ejer1.component';
import { Ejer2Component } from './ejercicios/ejer2/ejer2.component';
import { Ejer3Component } from './ejercicios/ejer3/ejer3.component';
import { Ejer4Component } from './ejercicios/ejer4/ejer4.component';
import { Ejer5Component } from './ejercicios/ejer5/ejer5.component';
import { Ejer6Component } from './ejercicios/ejer6/ejer6.component';
import { Ejer7Component } from './ejercicios/ejer7/ejer7.component';
import { Ejer8Component } from './ejercicios/ejer8/ejer8.component';
import { Ejer9Component } from './ejercicios/ejer9/ejer9.component';
import { Ejer10Component } from './ejercicios/ejer10/ejer10.component';
import { DadoComponent } from './ejercicios/dado/dado.component';
import { DadosComponent } from './ejercicios/dado/dados/dados.component';
import { CronometroComponent } from './ejercicios/cronometro/cronometro.component';
import { CronoHijoComponent } from './ejercicios/cronometro/crono-hijo/crono-hijo.component';
import { SelectornumericoComponent } from './ejercicios/ejer5/selectornumerico/selectornumerico.component';
import { ListadoarticulosComponent } from './ejercicios/ejer6/listadoarticulos/listadoarticulos.component';
import { Ejer7Module } from './ejercicios/ejer7/ejer7.module';
import { AcercadeComponent } from './acercade/acercade.component';
import { Ejer11Component } from './ejercicios/ejer11/ejer11.component';
import { Ejer12Component } from './ejercicios/ejer12/ejer12.component';
import { Ejer13Component } from './ejercicios/ejer13/ejer13.component';
import { Ejer14Component } from './ejercicios/ejer14/ejer14.component';
import { Ejer15Component } from './ejercicios/ejer15/ejer15.component';
import { LetrasPipe } from './ejercicios/ejer13/letras.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Ejer1Component,
    Ejer2Component,
    Ejer3Component,
    Ejer4Component,
    Ejer5Component,
    Ejer6Component,
    Ejer7Component,
    Ejer8Component,
    Ejer9Component,
    Ejer10Component,
    DadoComponent,
    DadosComponent,
    CronometroComponent,
    CronoHijoComponent,
    SelectornumericoComponent,
    ListadoarticulosComponent,
    AcercadeComponent,
    Ejer11Component,
    Ejer12Component,
    Ejer13Component,
    Ejer14Component,
    Ejer15Component,
    LetrasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ejer7Module,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
