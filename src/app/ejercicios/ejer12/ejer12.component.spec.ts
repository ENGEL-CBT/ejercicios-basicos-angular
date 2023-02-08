import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejer12Component } from './ejer12.component';

describe('Ejer12Component', () => {
  let component: Ejer12Component;
  let fixture: ComponentFixture<Ejer12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejer12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejer12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
