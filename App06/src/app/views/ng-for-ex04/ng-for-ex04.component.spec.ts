import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForEx04Component } from './ng-for-ex04.component';

describe('NgForEx04Component', () => {
  let component: NgForEx04Component;
  let fixture: ComponentFixture<NgForEx04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForEx04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForEx04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
