import { Component, input, output, signal } from '@angular/core';
import { ExerciseSet } from '@gym-models/Exercises/ExerciseSet';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideDelete } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmComboboxImports } from '@spartan-ng/helm/combobox';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmTextareaImports } from '@spartan-ng/helm/textarea';
import { RestTimePopover } from '../rest-time-popover/rest-time-popover';
import { SetTypeDropdown } from '../set-type-combobox/set-type-dropdown';
import { WeightInputPopover } from '../weight-input-popover/weight-input-popover';

@Component({
  selector: 'exercise-set',
  imports: [
    HlmCardImports,
    HlmButtonImports,
    HlmCheckboxImports,
    HlmFieldImports,
    HlmTextareaImports,
    HlmComboboxImports,
    HlmInputImports,
    NgIcon,
    RestTimePopover,
    SetTypeDropdown,
    WeightInputPopover,
  ],
  providers: [provideIcons({ lucideDelete })],
  templateUrl: './exercise-set.html',
  styleUrl: './exercise-set.css',
})
export class ExerciseSetComponent {
  public set = input<ExerciseSet>({} as ExerciseSet);
  public completionChanged = output<boolean>();
  public deleteSet = output<void>();

  public isHovered = signal<boolean>(false);

  constructor() {}

  onDelete() {
    this.deleteSet.emit();
  }

  toggleCompletion() {
    this.set().isCompleted = !this.set().isCompleted;
    this.completionChanged.emit(this.set().isCompleted);
  }
}
