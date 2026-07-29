import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerUpperRepRangeGridInputComponent } from './lower-upper-rep-range-grid-input-component';

describe('LowerUpperRepRangeGridInputComponent', () => {
  let component: LowerUpperRepRangeGridInputComponent;
  let fixture: ComponentFixture<LowerUpperRepRangeGridInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowerUpperRepRangeGridInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LowerUpperRepRangeGridInputComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
