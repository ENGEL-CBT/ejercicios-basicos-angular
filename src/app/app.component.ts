import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  ejercicios = [1,2,3,4,5,6,7,8,9,10]

  title = 'ejercicios-basicos'

  nombre = 'Alexa'
  apellido = 'Perez'
  edad = this.getRandom()
  edades = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
  sueldos = [1500, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
  meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre']
  consulta = ''

  sumarSueldos() {
    let suma = 0;
    for (let i = 0; i < this.sueldos.length; i++) {
      suma += this.sueldos[i];
    }
    return suma;
  }

  getRandom() {
    return Math.floor(Math.random() * 50) + 1;
  }

}
