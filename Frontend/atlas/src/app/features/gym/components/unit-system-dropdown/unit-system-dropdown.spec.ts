import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitSystemDropdown } from './unit-system-dropdown';

describe('UnitSystemDropdown', () => {
  let component: UnitSystemDropdown;
  let fixture: ComponentFixture<UnitSystemDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitSystemDropdown],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitSystemDropdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
