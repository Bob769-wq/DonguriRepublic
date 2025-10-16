import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  template: `
    <div
      class="media-screen-75rem:max-w-1170 media-screen-62rem:max-w-970 md:max-w-750 md:aspect-auto aspect-square  mx-auto media-screen-75rem:mt-header-height mt-28 "
    >
      <a routerLink="/hero" class="block p-3.5">
        <img
          src="/hero-section/hero-section.webp"
          alt="hero-section"
          class="w-full h-full object-cover
           hidden md:block"
        />
        <img
          src="/hero-section/hero-section2.webp"
          alt="hero-section"
          class="w-full h-full object-cover md:hidden"
        />
      </a>
    </div>
  `,
  styles: ``,
})
export class HeroSection {}
