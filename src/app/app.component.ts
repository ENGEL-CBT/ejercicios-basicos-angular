import { Component, OnInit } from '@angular/core';

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
import { Ejer11Component } from './ejercicios/ejer11/ejer11.component';
import { Ejer12Component } from './ejercicios/ejer12/ejer12.component';
import { Ejer13Component } from './ejercicios/ejer13/ejer13.component';
import { Ejer14Component } from './ejercicios/ejer14/ejer14.component';
import { Ejer15Component } from './ejercicios/ejer15/ejer15.component';
import { DadoComponent } from './ejercicios/dado/dado.component';
import { CronometroComponent } from './ejercicios/cronometro/cronometro.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {

  title = 'ejercicios-basicos'
  ejercicios = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  componentes = [Ejer1Component, Ejer2Component, DadoComponent, CronometroComponent, Ejer5Component, Ejer6Component, Ejer7Component, Ejer8Component, Ejer9Component, Ejer10Component, Ejer11Component, Ejer12Component, Ejer13Component, Ejer14Component, Ejer15Component]

  componente: any = Ejer1Component
  colorFondo = 'white'

  constructor() { }

  ngOnInit() {
    this.setComponent(0)
    this.colorFondo = this.getRandomColor()
  }

  setComponent(index: number) {
    this.colorFondo = this.getRandomColor()
    this.componente = this.componentes[index]
  }

  getRandomNumber = (limit: any) => {
    return Math.floor(Math.random() * limit)
  }
  
  getRandomColor = () => {
    const h = this.getRandomNumber(360)
    return `hsl(${h}deg, 80%, 93%)`
  }
}


