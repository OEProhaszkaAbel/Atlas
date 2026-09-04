import { Component, signal } from '@angular/core';
import { HlmFieldImports } from "@spartan-ng/helm/field";
import { HlmCardImports } from "@spartan-ng/helm/card";
import { form, FormField, maxLength, minLength, pattern, required, submit } from '@angular/forms/signals';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmItemImports } from '@spartan-ng/helm/item';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBadgeCheck, lucideChevronRight } from '@ng-icons/lucide';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';


@Component({
  selector: 'spartan-workout-component',
  imports: [HlmSeparatorImports,
    HlmCardImports, HlmFieldImports, HlmInputImports, HlmButtonImports, HlmItemImports
  ],
  providers: [provideIcons({ lucideBadgeCheck, lucideChevronRight })],
  templateUrl: './workout-component.html',
  styleUrl: './workout-component.css',
})
export class WorkoutComponent {

}