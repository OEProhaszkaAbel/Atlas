import { ChangeDetectionStrategy, Component, computed, resource, signal } from '@angular/core';
import { HlmComboboxImports } from '@spartan-ng/helm/combobox';
import { HlmSpinnerImports } from '@spartan-ng/helm/spinner';
import { Exercise } from '../../../../models/Exercises/Exercises';

@Component({
  selector: 'spartan-exercise-picker-component',
  imports: [HlmComboboxImports, HlmSpinnerImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './exercise-picker-component.html',
  styleUrl: './exercise-picker-component.css',
})

export class ExercisePickerComponent {
  public search = signal('');

  public itemToString = (exercise: Exercise) => exercise.name;

  public exercises = resource({
    defaultValue: [],
    params: () => ({ search: this.search() }),
    loader: async ({ params }) => {
      const search = params.search;

      if (search.length === 0) {
        return [];
      }

      return await this.searchExercises(search, (item, query) => item.toLowerCase().includes(query.toLowerCase()));
    },
  });

  public showStatus = computed(() => this.exercises.error() || this.exercises.isLoading() || this.exercises.value().length === 0);

  async searchExercises(query: string, filter: (item: string, query: string) => boolean): Promise<Exercise[]> {
    return this._allExercises.filter((exercise) => {
      return (
        filter(exercise.name, query)
      );
    });
  }

  private readonly _allExercises: Exercise[] = [
    {
      id: 1,
      name: 'Push Up'
    },
    {
      id: 2,
      name: 'Pull Up'
    },
    {
      id: 3,
      name: 'Squat'
    },
    {
      id: 4,
      name: 'Lunge'
    },
    {
      id: 5,
      name: 'Plank'
    },
    {
      id: 6,
      name: 'Burpee'
    },
    {
      id: 7,
      name: 'Mountain Climber'
    },
    {
      id: 8,
      name: 'Jumping Jack'
    },
    {
      id: 9,
      name: 'Sit Up'
    },
    {
      id: 10,
      name: 'Leg Raise'
    }
  ];
}