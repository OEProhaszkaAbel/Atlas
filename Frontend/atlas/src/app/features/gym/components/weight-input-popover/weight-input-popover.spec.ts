import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightInputPopover } from './weight-input-popover';

describe('WeightInputPopover', () => {
  let component: WeightInputPopover;
  let fixture: ComponentFixture<WeightInputPopover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeightInputPopover],
    }).compileComponents();

    fixture = TestBed.createComponent(WeightInputPopover);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
