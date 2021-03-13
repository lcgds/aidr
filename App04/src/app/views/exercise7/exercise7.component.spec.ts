import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise7Component } from './exercise7.component';

describe('Exercise7Component', () => {
  let component: Exercise7Component;
  let fixture: ComponentFixture<Exercise7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
