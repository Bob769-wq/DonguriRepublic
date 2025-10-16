import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../button/button';
import { Logo } from '../logo/logo';
interface ProductsList {
  id: number;
  title: string;
  img1: string;
  img2?: string;
  link: string;
  price: string;
}
@Component({
  selector: 'app-hot-products',
  imports: [RouterLink, Button, Logo],
  template: `
    <app-logo
      label="/hot-products/hot-products-logo.webp"
      label2="/hot-products/hot-product-logo-s.webp"
    />
    <div
      class="media-screen-75rem:max-w-1170 media-screen-62rem:max-w-970 md:max-w-750 mx-auto px-6"
    >
      <div
        class="grid grid-cols-2 gap-x-4  md:grid-cols-4 media-screen-75rem:gap-x-0 gap-y-4 justify-items-center"
      >
        @for (item of productItem; track item.id) {
          <a [routerLink]="item.link" class="flex flex-col media-screen-75rem:w-64 relative group">
            <div class="aspect-square relative">
              <img
                [src]="item.img1"
                [alt]="item.title"
                class="w-full h-full aspect-square transition-opacity media-screen-62rem:group-hover:opacity-0 duration-300"
              />
              <img
                [src]="item.img2"
                [alt]="item.title"
                class="w-full h-full aspect-square absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden media-screen-62rem:block"
              />
              <div
                class="absolute flex media-screen-62rem:group-hover:flex bottom-5 right-4 gap-2 media-screen-62rem:hidden"
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
              <h4 class="text-center">{{ item.title }}</h4>
              <h5 class="text-center">{{ item.price }}</h5>
            </div>
          </a>
        }
      </div>
      <app-button label="查看更多" />
    </div>
  `,
  styles: ``,
})
export class HotProducts {
  productItem: ProductsList[] = [
    {
      id: 1,
      title: '想造畫廊 風之谷 酷夏娜和多魯美奇亞裝甲兵',
      price: 'NT$4,500',
      link: '/product',
      img1: '/hot-products/hot-products1-1.webp',
      img2: '/hot-products/hot-products1-2.webp',
    },
    {
      id: 2,
      title: '點燈音樂擺飾 紅豬 秘密基地',
      price: 'NT$5,750',
      link: '/product',
      img1: '/hot-products/hot-products2-1.webp',
      img2: '/hot-products/hot-products2-2.webp',
    },
    {
      id: 3,
      title: '迴力車系列 風之谷 王蟲平靜的藍色',
      price: 'NT$1,080',
      link: '/product',
      img1: '/hot-products/hot-products3-1.webp',
      img2: '/hot-products/hot-products3-2.webp',
    },
    {
      id: 4,
      title: '迴力車系列 風之谷 王蟲憤怒的紅色',
      price: 'NT$1,080',
      link: '/product',
      img1: '/hot-products/hot-products4-1.webp',
      img2: '/hot-products/hot-products4-2.webp',
    },
    {
      id: 5,
      title: '麵包店的麵包圈 魔女宅急便',
      price: 'NT$4,500',
      link: '/product',
      img1: '/hot-products/hot-products5-1.webp',
      img2: '/hot-products/hot-products5-2.webp',
    },
    {
      id: 6,
      title: '萬年曆 魔女宅急便 午後的店員',
      price: 'NT$4,500',
      link: '/product',
      img1: '/hot-products/hot-products6-1.webp',
      img2: '/hot-products/hot-products6-2.webp',
    },
    {
      id: 7,
      title: '掛牆時鐘 魔女宅急便 琪琪的招牌',
      price: 'NT$2,080',
      link: '/product',
      img1: '/hot-products/hot-products7-1.webp',
      img2: '/hot-products/hot-products7-2.webp',
    },
    {
      id: 8,
      title: '馬克杯 魔女宅急便 吉吉 白色',
      price: 'NT$480',
      link: '/product',
      img1: '/hot-products/hot-products8-1.webp',
      img2: '/hot-products/hot-products8-2.webp',
    },
  ];
}
