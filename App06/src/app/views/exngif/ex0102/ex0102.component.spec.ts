import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex0102Component } from './ex0102.component';

describe('Ex0102Component', () => {
  let component: Ex0102Component;
  let fixture: ComponentFixture<Ex0102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex0102Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex0102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
