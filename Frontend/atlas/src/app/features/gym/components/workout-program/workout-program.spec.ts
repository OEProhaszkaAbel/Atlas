import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutProgram } from './workout-program';

describe('WorkoutProgram', () => {
  let component: WorkoutProgram;
  let fixture: ComponentFixture<WorkoutProgram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutProgram],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutProgram);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
