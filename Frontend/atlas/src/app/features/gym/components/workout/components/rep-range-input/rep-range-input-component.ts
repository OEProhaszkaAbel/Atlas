import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, min, required, FormRoot } from '@angular/forms/signals';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { OnlyIntegerDirective } from '../../../../../../shared/directives/appOnlyIntegerDirective/app-only-integer'; // TODO: Put directives into a @spartan-ng similar stuff to make paths easier to import

@Component({
  selector: 'spartan-rep-range-input-component',
  imports: [HlmInputImports, HlmFieldImports, FormRoot, OnlyIntegerDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'min-w-xs sm:min-w-sm' },
  templateUrl: './rep-range-input-component.html',
  styleUrl: './rep-range-input-component.css',
})
export class RepRangeInputComponent {
  protected readonly _model = signal({
    repRange: 1,
  });

  public readonly form = form(
    this._model,
    (schemaPath) => {
      required(schemaPath.repRange, { message: 'Rep range is required' });
      min(schemaPath.repRange, 1, { message: 'Rep range must be at least 1' });
    },
    {
      submission: {
        action: async () => {
          const model = this._model();
          console.log(model);
        },
      },
    },
  );

  public reset() {
    this.form().reset({
      repRange: 1,
    });
  }

}
