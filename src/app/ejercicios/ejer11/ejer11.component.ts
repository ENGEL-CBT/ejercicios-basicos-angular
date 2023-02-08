import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../articulos.service';

@Component({
  selector: 'app-ejer11',
  templateUrl: './ejer11.component.html',
  styleUrls: ['./ejer11.component.css']
})
export class Ejer11Component implements OnInit {

  articulos :any;

  constructor(private articulosServicio: ArticulosService) {
  }
  
  ngOnInit() {
    this.articulos = this.articulosServicio.retornar();
  }

}
