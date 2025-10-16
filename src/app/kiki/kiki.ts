import { Component } from '@angular/core';
import { Button } from '../button/button';
import { RouterLink } from '@angular/router';
import { ProductCardContent } from '../products-carousel/product-card-content';
import { CarouselSection } from '../carousel-section/carousel-section';
interface KikiList {
  id: number;
  title: string;
  link: string;
  price: string;
  img1: string;
  img2: string;
}
@Component({
  selector: 'app-kiki',
  imports: [CarouselSection],
  template: `
    <div class="flex justify-center p-3.5">
      <h2 class="text-2xl font-bold">魔女宅急便</h2>
    </div>
    <app-carousel-section [items]="kikiItems" />
  `,
  styles: ``,
})
export class Kiki {
  kikiItems: KikiList[] = [
    {
      id: 1,
      title: '飾物盒 魔女宅急便 籠子裡的吉吉',
      link: '/kiki',
      price: 'NT$700',
      img1: '/kiki/kiki1-1.webp',
      img2: '/kiki/kiki1-2.webp',
    },
    {
      id: 2,
      title: '和風沙包 魔女宅急便 吉吉',
      link: '/kiki',
      price: 'NT$880',
      img1: '/kiki/kiki2-1.webp',
      img2: '/kiki/kiki2-2.webp',
    },
    {
      id: 3,
      title: '美味系列小盤子 魔女宅急便 零食時間',
      link: '/kiki',
      price: 'NT$350',
      img1: '/kiki/kiki3-1.webp',
      img2: '/kiki/kiki3-2.webp',
    },
    {
      id: 4,
      title: '鑰匙圈 魔女宅急便 麵包圈',
      link: '/kiki',
      price: 'NT$360',
      img1: '/kiki/kiki4-1.webp',
      img2: '/kiki/kiki4-2.webp',
    },
  ];
}
