import { Component } from '@angular/core';
import { Button } from '../button/button';
import { RouterLink } from '@angular/router';
import { ProductCardContent } from '../products-carousel/product-card-content';
import { CarouselSection } from '../carousel-section/carousel-section';
interface TotoroList {
  id: number;
  title: string;
  img1: string;
  img2?: string;
  price: string;
  link: string;
}
@Component({
  selector: 'app-totoro',
  imports: [CarouselSection],
  template: `
    <div class="flex justify-center p-3.5">
      <h2 class="text-2xl font-bold">龍貓</h2>
    </div>
    <app-carousel-section [items]="totoroItems" />
  `,
  styles: ``,
})
export class Totoro {
  totoroItems: TotoroList[] = [
    {
      id: 1,
      title: '和風沙包 龍貓 大龍貓',
      price: 'NT$860',
      img1: '/totoro/totoro1-1.webp',
      img2: '/totoro/totoro1-2.webp',
      link: '/totoro',
    },
    {
      id: 2,
      title: '和風沙包 龍貓 大龍貓',
      price: 'NT$860',
      img1: '/totoro/totoro1-1.webp',
      img2: '/totoro/totoro1-2.webp',
      link: '/totoro',
    },
    {
      id: 3,
      title: '美味系列小盤子 龍貓 焦糖',
      price: 'NT$680',
      img1: '/totoro/totoro4-1.webp',
      img2: '/totoro/totoro4-2.webp',
      link: '/totoro',
    },
    {
      id: 4,
      title: '美味系列小盤子 龍貓 焦糖',
      price: 'NT$350',
      img1: '/totoro/totoro4-1.webp',
      img2: '/totoro/totoro4-2.webp',
      link: '/totoro',
    },
  ];
}
