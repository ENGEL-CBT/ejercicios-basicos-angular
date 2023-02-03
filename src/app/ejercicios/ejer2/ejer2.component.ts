import { Component } from '@angular/core';

@Component({
  selector: 'app-ejer2',
  templateUrl: './ejer2.component.html'
})
export class Ejer2Component {  

  art = {
    cod: 0,
    descripcion: '',
    precio: 0
  }

  articArr = [
    { cod: 1, descripcion: 'papas', precio: 10.55 },
    { cod: 2, descripcion: 'manzanas', precio: 12.10 },
    { cod: 3, descripcion: 'melon', precio: 52.30 },
    { cod: 4, descripcion: 'cebollas', precio: 17 },
    { cod: 5, descripcion: 'calabaza', precio: 20 }
  ]

  newArtic() {
    if (this.art.cod <= 0 || this.art.descripcion.length <= 0 || this.art.precio <= 0) {
      alert('Favor de llenar todos los campos')
    } else {
      this.articArr.push({cod: this.art.cod, descripcion: this.art.descripcion, precio: this.art.precio})
    }
  }

  modArtic() {
    if (this.art.cod <= 0) {
      alert('Favor ingresar el código del Artículo')
    } else {
      var control = false
      var art
      for (var x=0; x<this.articArr.length; x++) {
        if (this.articArr[x].cod == this.art.cod) {
          art = x
          control = true
        }
      }
      if (control && art != null) {
        if (this.art.descripcion.length > 0) this.articArr[art].descripcion = this.art.descripcion
        if (this.art.precio > 0) this.articArr[art].precio = this.art.precio
      } else {
        alert('Favor ingresar un código correcto')
      }
    }
  }

  delArtic(cod: number) {
    for (var x=0; x<this.articArr.length; x++) {
      if (this.articArr[x].cod == cod) {
        this.articArr.splice(x, 1);
      }
    }
  }

  selArtic(art: {cod: number, descripcion: string, precio: number}) {
    this.art.cod = art.cod
    this.art.descripcion = art.descripcion
    this.art.precio = art.precio
  }

}
