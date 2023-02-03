import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  valor1: number=1
  valor2: number=2
  valor3: number=3

  resultado: string = ''

  constructor() { }

  ngOnInit(): void {
    this.valor1 = Math.trunc(Math.random() * 6) + 1
    this.valor2 = Math.trunc(Math.random() * 6) + 1
    this.valor3 = Math.trunc(Math.random() * 6) + 1
  }

  getNumero(){
    return Math.trunc(Math.random() * 6) + 1
  }

  jugar(){
    this.valor1 = Math.trunc(Math.random() * 6) + 1
    this.valor2 = Math.trunc(Math.random() * 6) + 1
    this.valor3 = Math.trunc(Math.random() * 6) + 1
    this.comprobar()
  }

  comprobar(){
    if (this.valor1 == this.valor2 && this.valor2 == this.valor3) {
      this.resultado = "Has ganado! 👏👏👏"
    } else {
      this.resultado = "Sigue intentando hasta conseguir tres iguales"
    }
  }

}
