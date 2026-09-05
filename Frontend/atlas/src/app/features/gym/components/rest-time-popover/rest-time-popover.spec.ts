import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestTimePopover } from './rest-time-popover';

describe('RestTimePopover', () => {
  let component: RestTimePopover;
  let fixture: ComponentFixture<RestTimePopover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestTimePopover],
    }).compileComponents();

    fixture = TestBed.createComponent(RestTimePopover);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
