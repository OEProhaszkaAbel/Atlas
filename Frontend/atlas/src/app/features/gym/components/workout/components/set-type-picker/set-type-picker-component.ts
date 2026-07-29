import { Component } from '@angular/core';
import { HlmComboboxImports } from '@spartan-ng/helm/combobox';
import { SetType } from '../../../../models/Exercises/SetType';

export const comboboxDefaultConfig = `
import { comboboxContainsFilter, provideBrnComboboxConfig } from '@spartan-ng/brain/combobox';

provideBrnComboboxConfig({
	filterOptions: {
		usage: 'search',
		sensitivity: 'base',
		ignorePunctuation: true,
	},
	filter: (itemValue: T, search: string, collator: Intl.Collator, itemToString?: ComboboxItemToString<T>) =>
		comboboxContainsFilter(itemValue, search, collator, itemToString),
	isItemEqualToValue: (itemValue: T, selectedValue: T | null) => Object.is(itemValue, selectedValue),
	itemToString: undefined,
});
`;

@Component({
  selector: 'spartan-set-type-picker-component',
  imports: [HlmComboboxImports],
  templateUrl: './set-type-picker-component.html',
  styleUrl: './set-type-picker-component.css',
})
export class SetTypePickerComponent {
  public setTypes: SetType[] = [
    {
      name: 'Standard',
      description: 'A standard set type with no special rules or variations.',
    },
    {
      name: 'Drop Set',
      description: 'A set type where you perform a set to failure, then reduce the weight and continue for more reps.',
    },
    {
      name: 'Superset',
      description: 'A set type where you perform two exercises back-to-back with no rest in between.',
    },
    {
      name: 'Giant Set',
      description: 'A set type where you perform three or more exercises back-to-back with no rest in between.',
    },
    {
      name: 'Pyramid Set',
      description: 'A set type where you increase or decrease the weight with each set, typically in a pyramid fashion.',
    },
  ];
}
