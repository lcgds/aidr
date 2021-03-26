import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex04Component } from './ex04.component';

describe('Ex04Component', () => {
  let component: Ex04Component;
  let fixture: ComponentFixture<Ex04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
