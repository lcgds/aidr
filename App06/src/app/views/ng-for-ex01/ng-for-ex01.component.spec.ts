import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForEx01Component } from './ng-for-ex01.component';

describe('NgForEx01Component', () => {
  let component: NgForEx01Component;
  let fixture: ComponentFixture<NgForEx01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForEx01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForEx01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
