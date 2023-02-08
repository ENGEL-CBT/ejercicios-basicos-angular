import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejer11Component } from './ejer11.component';

describe('Ejer11Component', () => {
  let component: Ejer11Component;
  let fixture: ComponentFixture<Ejer11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejer11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejer11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
