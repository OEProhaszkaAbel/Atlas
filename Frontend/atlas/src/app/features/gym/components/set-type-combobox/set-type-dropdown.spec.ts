import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTypeCombobox } from './set-type-combobox';

describe('SetTypeCombobox', () => {
  let component: SetTypeCombobox;
  let fixture: ComponentFixture<SetTypeCombobox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTypeCombobox],
    }).compileComponents();

    fixture = TestBed.createComponent(SetTypeCombobox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
