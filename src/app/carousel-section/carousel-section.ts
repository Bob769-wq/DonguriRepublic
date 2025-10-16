import { Component, input } from '@angular/core';
import { Button } from '../button/button';
import { ProductCardContent } from '../products-carousel/product-card-content';

interface ProductList {
  id: number;
  title: string;
  img1: string;
  img2?: string;
  price: string;
  link: string;
}

@Component({
  selector: 'app-carousel-section',
  imports: [Button, ProductCardContent],
  template: `
    <div
      class="media-screen-75rem:max-w-1170 media-screen-62rem:max-w-970 md:max-w-750 mx-auto px-3.5"
    >
      <div class="grid grid-cols-2 md:flex gap-4 justify-center py-4">
        @for (item of items(); track item.id) {
          <app-product-card-content [product]="item" />
        }
      </div>
      <app-button label="查看更多" />
    </div>
  `,
  styles: ``,
})
export class CarouselSection {
  items = input.required<ProductList[]>();
}
