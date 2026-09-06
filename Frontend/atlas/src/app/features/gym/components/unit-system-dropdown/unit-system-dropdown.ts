import { Component, model } from '@angular/core';
import { DEFAULT_UNIT_SYSTEM, UnitSystem } from '@gym-models/Exercises/Weight';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmItemImports } from '@spartan-ng/helm/item';

@Component({
  selector: 'unit-system-dropdown',
  imports: [HlmItemImports, HlmButtonImports, HlmAvatarImports, HlmDropdownMenuImports],
  templateUrl: './unit-system-dropdown.html',
  styleUrl: './unit-system-dropdown.css',
})
export class UnitSystemDropdown {
  public selectedUnitSystem = model<UnitSystem>(DEFAULT_UNIT_SYSTEM);

  changeUnitSystem(value: string) {
    let unit: UnitSystem = value as UnitSystem;

    this.selectedUnitSystem.set(unit);
  }

  getUnitSystems(): UnitSystem[] {
    return ['kg', 'lb'];
  }
}
