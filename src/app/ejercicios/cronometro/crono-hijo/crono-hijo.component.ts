import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crono-hijo',
  templateUrl: './crono-hijo.component.html',
  styleUrls: ['./crono-hijo.component.css']
})
export class CronoHijoComponent implements OnInit {
  
  segundo = 0

  @Input() inicio: number = 0

  @Output() multiplo10 = new EventEmitter()

  constructor() { }

  ngOnInit() {
    this.segundo = this.inicio
    
    setInterval(() => {
      this.segundo++
      if (this.segundo % 10 == 0)
        this.multiplo10.emit(this.segundo)
    }, 1000)
  }

}
