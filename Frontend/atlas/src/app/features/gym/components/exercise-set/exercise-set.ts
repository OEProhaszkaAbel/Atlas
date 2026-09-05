import { Component, input, output, signal } from '@angular/core';
import { ExerciseSet } from '@gym-models/Exercises/ExerciseSet';
import { SetType } from '@gym-models/Exercises/SetType';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideClockAlert,
  lucideClockCheck,
  lucideClockPlus,
  lucideDelete,
} from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmComboboxImports } from '@spartan-ng/helm/combobox';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';
import { HlmTextareaImports } from '@spartan-ng/helm/textarea';

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
    HlmPopoverImports,
    NgIcon,
  ],
  providers: [provideIcons({ lucideDelete, lucideClockPlus, lucideClockAlert, lucideClockCheck })],
  templateUrl: './exercise-set.html',
  styleUrl: './exercise-set.css',
})
export class ExerciseSetComponent {
  public set = input<ExerciseSet>({} as ExerciseSet);
  public setTypes: SetType[] = [
    { name: 'Normal Set', description: 'Description for Set Type 1' } as SetType,
    { name: 'Giant Set', description: 'Description for  Set Type 2' } as SetType,
  ];
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
