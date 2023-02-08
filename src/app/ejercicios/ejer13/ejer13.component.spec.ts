import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejer13Component } from './ejer13.component';

describe('Ejer13Component', () => {
  let component: Ejer13Component;
  let fixture: ComponentFixture<Ejer13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejer13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejer13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
