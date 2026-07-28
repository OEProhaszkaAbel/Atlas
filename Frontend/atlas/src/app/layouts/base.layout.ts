import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { hlm } from '@spartan-ng/helm/utils';
import { ClassValue } from 'clsx';
import { Header } from '../ui/header';
import SidebarStickyHeaderPage from "../ui/sidebar/index.page";

@Component({
  selector: 'spartan-base-layout',
  imports: [Header, SidebarStickyHeaderPage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <spartan-header />
    @if (!isLoggedIn()) { <!-- TODO: Implement proper authentication check -->
      <!-- Add your logged-in user navigation here -->
       <spartan-sidebar-sticky-header/>
    }
    <main [class]="_computedMainClasses()">
      <ng-content />
    </main>
  `,
})
export class BaseLayout {
  public readonly mainClasses = input<ClassValue>('');
  public isLoggedIn = signal<boolean>(false); // TODO: Replace with actual authentication logic

  protected readonly _computedMainClasses = computed(() =>
    hlm('mx-auto max-w-(--breakpoint-lg) px-4 pb-20', this.mainClasses()),
  );
}
