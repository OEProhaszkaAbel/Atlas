import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnlyIntegerDirective } from '@directives/onlyIntegerDirective/only-integer';
import { EMPTY_WEIGHT, Weight } from '@gym-models/Exercises/Weight';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideDumbbell } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';
import { UnitSystemDropdown } from '../unit-system-dropdown/unit-system-dropdown';

@Component({
  selector: 'weight-input-popover',
  imports: [
    HlmPopoverImports,
    HlmButtonImports,
    NgIcon,
    HlmFieldImports,
    HlmInputImports,
    FormsModule,
    HlmInputGroupImports,
    OnlyIntegerDirective,
    UnitSystemDropdown,
  ],
  providers: [provideIcons({ lucideDumbbell })],
  templateUrl: './weight-input-popover.html',
  styleUrl: './weight-input-popover.css',
})
export class WeightInputPopover {
  public weight = model<Weight>(EMPTY_WEIGHT); // TODO: Make a service that gets the default unit system

  onWeightChange(value: number) {
    this.weight.set({ ...this.weight(), value });
  }
}
