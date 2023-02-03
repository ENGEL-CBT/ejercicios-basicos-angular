import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronoHijoComponent } from './crono-hijo.component';

describe('CronoHijoComponent', () => {
  let component: CronoHijoComponent;
  let fixture: ComponentFixture<CronoHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronoHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
