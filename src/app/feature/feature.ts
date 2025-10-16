import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../button/button';
import { Logo } from '../logo/logo';
interface FeatureList {
  id: number;
  img: string;
  link: string;
  title: string;
}
@Component({
  selector: 'app-feature',
  imports: [RouterLink, Button, Logo],
  template: `
    <app-logo label="/feature/feature-logo.webp" label2="/feature/feature-logo-s.webp" />
    <div
      class="media-screen-75rem:max-w-1170 media-screen-62rem:max-w-970 md:max-w-750 mx-auto px-3.5"
    >
      <div class="grid md:grid-cols-3 gap-2.5">
        @for (item of featureItems; track item.id) {
          <a [routerLink]="item.link">
            <img [src]="item.img" [alt]="item.title" />
          </a>
        }
      </div>
      <app-button label="特輯一覽" />
    </div>
  `,
  styles: ``,
})
export class Feature {
  featureItems: FeatureList[] = [
    { id: 1, img: '/feature/feature01.webp', link: '/feature', title: '01' },
    { id: 2, img: '/feature/feature02.webp', link: '/feature', title: '02' },
    { id: 3, img: '/feature/feature03.webp', link: '/feature', title: '03' },
    { id: 4, img: '/feature/feature04.webp', link: '/feature', title: '04' },
    { id: 5, img: '/feature/feature05.webp', link: '/feature', title: '05' },
    { id: 6, img: '/feature/feature06.webp', link: '/feature', title: '06' },
  ];
}
