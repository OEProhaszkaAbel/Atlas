import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepRangeInputPopover } from './rep-range-input-popover';

describe('RepRangeInputPopover', () => {
  let component: RepRangeInputPopover;
  let fixture: ComponentFixture<RepRangeInputPopover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepRangeInputPopover],
    }).compileComponents();

    fixture = TestBed.createComponent(RepRangeInputPopover);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
