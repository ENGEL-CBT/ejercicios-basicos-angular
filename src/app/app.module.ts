import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
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
    Ejer10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
