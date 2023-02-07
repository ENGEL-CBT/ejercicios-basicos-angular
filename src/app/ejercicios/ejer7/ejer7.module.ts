import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosComponent } from './dados/dados.component';


@NgModule({
  declarations: [
    DadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DadosComponent]
})
export class Ejer7Module { }
