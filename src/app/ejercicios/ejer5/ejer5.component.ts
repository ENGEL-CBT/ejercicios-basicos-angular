import { Component, ViewChild } from '@angular/core';

import { SelectornumericoComponent} from './selectornumerico/selectornumerico.component';

@Component({
  selector: 'app-ejer5',
  templateUrl: './ejer5.component.html'
})
export class Ejer5Component {  

  @ViewChild('selector1') selector1!: SelectornumericoComponent;
  @ViewChild('selector2') selector2!: SelectornumericoComponent;  

  fijarSelector1(valor:number) {
    this.selector1.fijar(valor);
  }

  fijarSelector2(valor:number) {
    this.selector2.fijar(valor);
  }

}
