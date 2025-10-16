import { Component } from '@angular/core';
import { Logo } from '../logo/logo';
import { DomSanitizer } from '@angular/platform-browser';
import { Button } from '../button/button';
interface VideoList {
  id: number;
  link: string;
}
@Component({
  selector: 'app-products-preview',
  imports: [Logo, Button],
  template: `
    <app-logo
      label="/products-preview/products-preview-logo.webp"
      label2="/products-preview/products-preview-logo-s.webp"
    />
    <div class="max-w-1170 mx-auto px-3.5 pt-4">
      <div class="md:px-10">
        <div class="flex flex-col md:flex-row justify-center gap-8">
          @for (item of videoItems; track item.id) {
            <div class="aspect-video flex-1">
              <iframe
                width="100%"
                height="100%"
                [src]="getSafeUrl(item.link)"
                title="YouTube
              video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write;
              encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          }
        </div>
      </div>
      <app-button label="查看更多" />
    </div>
  `,
  styles: ``,
})
export class ProductsPreview {
  constructor(private sanitizer: DomSanitizer) {}
  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  videoItems: VideoList[] = [
    { id: 1, link: 'https://www.youtube.com/embed/EzWqmkj7YYY?si=mCUp6ulqMnWcNj_o' },
    { id: 2, link: 'https://www.youtube.com/embed/kP4hBX2Rdxk?si=v5zR-sMZn_QJm3v1' },
    { id: 3, link: 'https://www.youtube.com/embed/e90LOESFWVM?si=uA9EUCSMqHWN-OqD' },
  ];
}
