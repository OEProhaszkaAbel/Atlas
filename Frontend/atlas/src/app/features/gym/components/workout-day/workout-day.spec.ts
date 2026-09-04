import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutDay } from './workout-day';

describe('WorkoutDay', () => {
  let component: WorkoutDay;
  let fixture: ComponentFixture<WorkoutDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutDay],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutDay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
