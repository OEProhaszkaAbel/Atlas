import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyInteger]',
  standalone: true,
})
export class OnlyIntegerDirective {
  private invalidKeys = ['.', ',', 'e', 'E', '+', '-'];

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    console.log(event.key);

    if (this.invalidKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    const pasteData = event.clipboardData?.getData('text');
    // Block pasting text containing anything other than digits
    if (pasteData && !/^\d+$/.test(pasteData)) {
      event.preventDefault();
    }
  }
}
