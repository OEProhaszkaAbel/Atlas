import { Component, computed, model } from '@angular/core';
import { DEFAULT_SET_TYPE, SET_TYPES, SetType } from '@gym-models/Exercises/SetType';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmItemImports } from '@spartan-ng/helm/item';

@Component({
  selector: 'set-type-dropdown',
  imports: [HlmItemImports, HlmButtonImports, HlmAvatarImports, HlmDropdownMenuImports],
  providers: [],
  templateUrl: './set-type-dropdown.html',
  styleUrl: './set-type-dropdown.css',
})
export class SetTypeDropdown {
  public selectedSetType = model<SetType>(DEFAULT_SET_TYPE);
  public selectedSetLetter = computed(() => this.getLetter(this.selectedSetType()));

  getSetTypes(): SetType[] {
    return SET_TYPES;
  }

  changeSetType(type: SetType) {
    this.selectedSetType.set(type);
  }

  getLetter(type: SetType): string {
    return type.name.charAt(0).toUpperCase();
  }

  getLetterColorClass(type: SetType): string {
    const letter = this.getLetter(type);
    switch (letter) {
      case 'N':
        return 'bg-blue-500 text-black';
      case 'W':
        return 'bg-red-500 text-black';
      case 'S':
        return 'bg-green-500 text-black';
      case 'D':
        return 'bg-purple-500 text-black';
      default:
        return 'bg-gray-500 text-black';
    }
  }
}
