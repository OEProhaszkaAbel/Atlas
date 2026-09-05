import { Component, computed, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnlyIntegerDirective } from '@directives/onlyIntegerDirective/only-integer';
import { EMPTY_REST_TIME, RestTime } from '@gym-models/Exercises/RestTime';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideClockAlert, lucideClockCheck, lucideClockPlus } from '@ng-icons/lucide';
import { ButtonVariants, HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';

@Component({
  selector: 'rest-time-popover',
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
  providers: [provideIcons({ lucideClockPlus, lucideClockAlert, lucideClockCheck })],
  templateUrl: './rest-time-popover.html',
  styleUrl: './rest-time-popover.css',
})
export class RestTimePopover {
  public restTime = model<RestTime>(EMPTY_REST_TIME);
  public isEmpty = computed(
    () => this.restTime().minRestTime === 0 && this.restTime().maxRestTime === 0,
  );
  public isInvalid = computed(() => this.restTime().minRestTime > this.restTime().maxRestTime);
  public isValid = computed(() => !this.isEmpty() && !this.isInvalid());
  public buttonVariant = computed<ButtonVariants['variant']>(() => {
    if (this.isInvalid()) return 'destructive';
    if (this.isEmpty()) return 'warning';
    if (this.isValid()) return 'success';

    return 'outline';
  });

  constructor() {}

  onMinRestTimeChange(value: number) {
    this.restTime.set({ ...this.restTime(), minRestTime: value });
  }

  onMaxRestTimeChange(value: number) {
    this.restTime.set({ ...this.restTime(), maxRestTime: value });
  }
}
