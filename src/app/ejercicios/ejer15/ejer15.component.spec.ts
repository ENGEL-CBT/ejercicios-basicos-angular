import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejer15Component } from './ejer15.component';

describe('Ejer15Component', () => {
  let component: Ejer15Component;
  let fixture: ComponentFixture<Ejer15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejer15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejer15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
