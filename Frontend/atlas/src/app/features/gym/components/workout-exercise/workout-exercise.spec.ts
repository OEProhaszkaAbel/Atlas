import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutExercise } from './workout-exercise';

describe('WorkoutExercise', () => {
  let component: WorkoutExercise;
  let fixture: ComponentFixture<WorkoutExercise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutExercise],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutExercise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
