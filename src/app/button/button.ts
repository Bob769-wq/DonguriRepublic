import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <div class="flex justify-center py-8 text-nav-font">
      <a
        class="cursor-pointer bg-primary-bg hover:bg-button-hover px-20 py-1.5 text-center w-full md:w-auto rounded"
        >{{ label() }}</a
      >
    </div>
  `,
  styles: ``,
})
export class Button {
  label = input.required<string>();
}
