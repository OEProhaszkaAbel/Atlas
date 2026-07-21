import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGalleryVerticalEnd } from '@ng-icons/lucide';
import { RegisterForm } from './register-form';

@Component({
  selector: 'spartan-register-component',
  imports: [RegisterForm, NgIcon, RouterLink],
  providers: [provideIcons({ lucideGalleryVerticalEnd })],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent { }
