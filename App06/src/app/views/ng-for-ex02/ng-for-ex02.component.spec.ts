import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForEx02Component } from './ng-for-ex02.component';

describe('NgForEx02Component', () => {
  let component: NgForEx02Component;
  let fixture: ComponentFixture<NgForEx02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForEx02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForEx02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
