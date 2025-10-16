import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ProductContent {
  id: number;
  title: string;
  img1: string;
  img2?: string;
  price: string;
  link: string;
}

@Component({
  selector: 'app-product-card-content',
  imports: [RouterLink],
  template: `
    <a [routerLink]="product().link" class="flex flex-col media-screen-75rem:w-64 relative group">
      <div class="aspect-square relative">
        <img
          [src]="product().img1"
          [alt]="product().title"
          class="object-contain w-full h-full aspect-square transition-opacity media-screen-62rem:group-hover:opacity-0 duration-300"
        />
        <img
          [src]="product().img2"
          [alt]="product().title"
          class="object-contain w-full h-full aspect-square absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden media-screen-62rem:block"
        />
        <div
          class="absolute flex media-screen-62rem:group-hover:flex bottom-5 right-4 gap-2 media-screen-62rem:hidden "
        >
          <div class="bg-white rounded-full h-8 w-8 flex justify-center items-center">
            <i class="fa-solid fa-heart fa-lg" style="color: currentColor;"></i>
          </div>
          <div class="bg-white rounded-full h-8 w-8 flex justify-center items-center">
            <i class="fa-solid fa-bag-shopping fa-lg" style="color: currentColor;"></i>
          </div>
        </div>
      </div>

      <div class="py-2.5 px-4">
        <h4 class="text-center">{{ product().title }}</h4>
        <h5 class="text-center">{{ product().price }}</h5>
      </div>
    </a>
  `,
  styles: ``,
})
export class ProductCardContent {
  product = input.required<ProductContent>();
}
