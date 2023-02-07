import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dadosModule',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  @Input() valorDado: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
