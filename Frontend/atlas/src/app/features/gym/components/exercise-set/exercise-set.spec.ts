import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSet } from './exercise-set';

describe('ExerciseSet', () => {
  let component: ExerciseSet;
  let fixture: ComponentFixture<ExerciseSet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseSet],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseSet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
