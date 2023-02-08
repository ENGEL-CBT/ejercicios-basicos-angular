import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejer14Component } from './ejer14.component';

describe('Ejer14Component', () => {
  let component: Ejer14Component;
  let fixture: ComponentFixture<Ejer14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejer14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejer14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
