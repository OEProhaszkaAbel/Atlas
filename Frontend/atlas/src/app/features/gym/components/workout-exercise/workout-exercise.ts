import { Component, computed, signal } from '@angular/core';
import { ExerciseSet } from '@gym-models/Exercises/ExerciseSet';
import { EMPTY_REP_RANGE } from '@gym-models/Exercises/RepRange';
import { EMPTY_REST_TIME, RestTime } from '@gym-models/Exercises/RestTime';
import { DEFAULT_SET_TYPE } from '@gym-models/Exercises/SetType';
import { Weight } from '@gym-models/Exercises/Weight';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronUp, lucidePlus } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmSeparator } from '@spartan-ng/helm/separator';
import { ExerciseSetComponent } from '../exercise-set/exercise-set';

@Component({
  selector: 'workout-exercise',
  imports: [HlmCardImports, HlmButtonImports, NgIcon, HlmSeparator, ExerciseSetComponent],
  providers: [provideIcons({ lucidePlus, lucideChevronDown, lucideChevronUp })],
  templateUrl: './workout-exercise.html',
  styleUrl: './workout-exercise.css',
})
export class WorkoutExercise {
  public isExpanded = signal(false);
  public isCompleted = signal(false);
  public isEditing = signal(false);
  public sets = signal<ExerciseSet[]>([
    {
      id: 1,
      isCompleted: false,
      setType: DEFAULT_SET_TYPE,
      weight: {
        value: 0,
        unit: 'kg', // TODO: Make this dynamic based on user preference (i.e. from service, local storage, etc.)
      } as Weight,
      reps: 0,
      repRange: EMPTY_REP_RANGE,
      restTime: EMPTY_REST_TIME,
      comment: '',
    } as ExerciseSet,
  ]);
  public isSetsEmpty = computed(() => this.sets().length === 0);

  toggleExpanded() {
    this.isExpanded.set(!this.isExpanded());
  }

  completedSet(set: ExerciseSet) {
    console.log('Completed set:', set);
  }

  deleteSet(set: ExerciseSet) {
    this.sets.update((sets) => sets.filter((s) => s !== set));
    console.log(this.sets.length);
  }

  addSet() {
    this.sets.update((sets) => [
      ...sets,
      {
        id: 0,
        isCompleted: false,
        setType: DEFAULT_SET_TYPE,
        weight: {
          value: 0,
          unit: 'kg', // TODO: Make this dynamic based on user preference (i.e. from service, local storage, etc.)
        } as Weight,
        reps: 0,
        repRange: EMPTY_REP_RANGE,
        restTime: { minRestTime: 0, maxRestTime: 0 } as RestTime,
        comment: '',
      } as ExerciseSet,
    ]);
  }
}
