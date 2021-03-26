import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForEx03Component } from './ng-for-ex03.component';

describe('NgForEx03Component', () => {
  let component: NgForEx03Component;
  let fixture: ComponentFixture<NgForEx03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForEx03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForEx03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
