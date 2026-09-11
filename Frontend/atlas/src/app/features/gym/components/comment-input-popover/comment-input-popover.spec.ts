import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentInputPopover } from './comment-input-popover';

describe('CommentInputPopover', () => {
  let component: CommentInputPopover;
  let fixture: ComponentFixture<CommentInputPopover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentInputPopover],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentInputPopover);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
