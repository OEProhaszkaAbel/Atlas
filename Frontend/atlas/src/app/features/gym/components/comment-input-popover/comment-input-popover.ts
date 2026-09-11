import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideNotebookText } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';
import { HlmTextareaImports } from '@spartan-ng/helm/textarea';

@Component({
  selector: 'comment-input-popover',
  imports: [
    HlmPopoverImports,
    HlmButtonImports,
    NgIcon,
    HlmFieldImports,
    HlmInputImports,
    HlmInputGroupImports,
    HlmTextareaImports,
    FormsModule,
  ],
  providers: [provideIcons({ lucideNotebookText })],
  templateUrl: './comment-input-popover.html',
  styleUrl: './comment-input-popover.css',
})
export class CommentInputPopover {
  public comment = model<string>('');

  onCommentChange(value: string) {}
}
