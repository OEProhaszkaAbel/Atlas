import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { RepRangeInputComponent } from '../rep-range-input/rep-range-input-component';

@Component({
  selector: 'spartan-lower-upper-rep-range-grid-input-component',
  imports: [HlmInputImports, HlmFieldImports, RepRangeInputComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'min-w-xs sm:min-w-sm' },
  templateUrl: './lower-upper-rep-range-grid-input-component.html',
  styleUrl: './lower-upper-rep-range-grid-input-component.css',
})
export class LowerUpperRepRangeGridInputComponent { }
