import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  template: `
    <div class="p-2.5">
      <img src="{{ label() }}" class="w-full h-full hidden md:block" alt="logo" />
      <img src="{{ label2() }}" class="w-full h-full md:hidden" alt="logo-s" />
    </div>
  `,
  styles: ``,
})
export class Logo {
  label = input.required<string>();
  label2 = input.required<string>();
}
