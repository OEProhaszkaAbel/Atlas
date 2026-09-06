import { Component, computed, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnlyIntegerDirective } from '@directives/onlyIntegerDirective/only-integer';
import { EMPTY_REP_RANGE, RepRange } from '@gym-models/Exercises/RepRange';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBook, lucideBookCheck } from '@ng-icons/lucide';
import { ButtonVariants, HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';

@Component({
  selector: 'rep-range-input-popover',
  imports: [
    HlmPopoverImports,
    HlmButtonImports,
    NgIcon,
    HlmFieldImports,
    HlmInputImports,
    FormsModule,
    HlmInputGroupImports,
    OnlyIntegerDirective,
  ],
  templateUrl: './rep-range-input-popover.html',
  providers: [provideIcons({ lucideBook, lucideBookCheck })],
  styleUrl: './rep-range-input-popover.css',
})
export class RepRangeInputPopover {
  public repRange = model<RepRange>(EMPTY_REP_RANGE);
  public isEmpty = computed(
    () => this.repRange().lowerRepRange == 0 && this.repRange().upperRepRange == 0,
  );
  public isInvalid = computed(() => this.repRange().lowerRepRange > this.repRange().upperRepRange);
  public isValid = computed(() => !this.isEmpty() && !this.isInvalid());

  public buttonVariant = computed<ButtonVariants['variant']>(() => {
    if (this.isInvalid()) return 'destructive';
    if (this.isEmpty()) return 'warning';
    if (this.isValid()) return 'success';

    return 'outline';
  });

  onLowerRepRangeChange(value: number) {
    this.repRange.set({ ...this.repRange(), lowerRepRange: value });
  }

  onUpperRepRangeChange(value: number) {
    this.repRange.set({ ...this.repRange(), upperRepRange: value });
  }
}
