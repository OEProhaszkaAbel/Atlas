import { Component, input, output, signal } from '@angular/core';
import { ExerciseSet } from '@gym-models/Exercises/ExerciseSet';
import { SetType } from '@gym-models/Exercises/SetType';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideDelete } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmComboboxImports } from '@spartan-ng/helm/combobox';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmTextareaImports } from '@spartan-ng/helm/textarea';

@Component({
  selector: 'exercise-set-component',
  imports: [
    HlmCardImports,
    HlmButtonImports,
    HlmCheckboxImports,
    HlmFieldImports,
    HlmTextareaImports,
    HlmComboboxImports,
    HlmInputImports,
    NgIcon,
  ],
  providers: [provideIcons({ lucideDelete })],
  templateUrl: './exercise-set-component.html',
  styleUrl: './exercise-set-component.css',
})
export class ExerciseSetComponent {
  public set = input<ExerciseSet>({} as ExerciseSet);
  public setTypes: SetType[] = [
    { name: 'Normal Set', description: 'Description for Set Type 1' } as SetType,
    { name: 'Giant Set', description: 'Description for  Set Type 2' } as SetType,
  ];
  public completionChanged = output<boolean>();
  public deleteSet = output<void>();

  public color = signal<string>('');
  public isRed = signal<boolean>(false);

  constructor() {
    this.color.set(this.DEFAULT_CLASSES);
  }

  private TRANSITION_CLASSES: string = 'transition-all duration-200 ease-in-out';
  private DEFAULT_CLASSES: string =
    '    has-[[aria-checked=true]]:border-green-600 has-[[aria-checked=true]]:bg-green-50 dark:has-[[aria-checked=true]]:border-green-900 dark:has-[[aria-checked=true]]:bg-green-950';

  setToRed() {
    this.color.update(
      () =>
        `border-red-600 bg-red-50 dark:border-red-900 dark:bg-red-950 ${this.TRANSITION_CLASSES}`,
    );
    this.isRed.set(true);
  }

  setToGreen() {
    this.color.update(() => this.DEFAULT_CLASSES);
    this.isRed.set(false);
  }
}
