import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepRangeInputComponent } from './rep-range-input-component';

describe('RepRangeInputComponent', () => {
  let component: RepRangeInputComponent;
  let fixture: ComponentFixture<RepRangeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepRangeInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepRangeInputComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
