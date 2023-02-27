import { Component } from '@angular/core';

@Component({
  selector: 'app-ejer13',
  templateUrl: './ejer13.component.html',
  styleUrls: ['./ejer13.component.css']
})
export class Ejer13Component {

  nombre = 'Juan Carlos';
  saldo = 1000.50;
  dias = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
  articulos = [
    {
      codigo: 1,
      descripcion: "papas",
      precio: 12.33
    },
    {
      codigo: 2,
      descripcion: "manzanas",
      precio: 54
    }
  ];
  fechaActual = new Date();

  vector = [1,2,3,4,5,6,7];

}
