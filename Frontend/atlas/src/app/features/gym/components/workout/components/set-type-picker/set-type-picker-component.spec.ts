import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTypePickerComponent } from './set-type-picker-component';

describe('SetTypePickerComponent', () => {
  let component: SetTypePickerComponent;
  let fixture: ComponentFixture<SetTypePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTypePickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SetTypePickerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
