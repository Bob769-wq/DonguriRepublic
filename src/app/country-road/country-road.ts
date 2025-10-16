import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselSection } from '../carousel-section/carousel-section';
interface CountryList {
  id: number;
  title: string;
  price: string;
  img1: string;
  img2: string;
  link: string;
}
@Component({
  selector: 'app-country-road',
  imports: [CarouselSection],
  template: `
    <div class="flex justify-center p-3.5">
      <h2 class="text-2xl font-bold">心之谷</h2>
    </div>
    <app-carousel-section [items]="countryItems" />
  `,
  styles: ``,
})
export class CountryRoad {
  countryItems: CountryList[] = [
    {
      id: 1,
      title: '美味系列小盤子 心之谷 鍋燒烏龍麵',
      price: 'NT$350',
      img1: '/country-road/country-road1-1.webp',
      img2: '/country-road/country-road1-2.webp',
      link: '/country',
    },
    {
      id: 2,
      title: '音樂盒 心之谷 貓男爵',
      price: 'NT$3,880',
      img1: '/country-road/country-road2-1.webp',
      img2: '/country-road/country-road2-2.webp',
      link: '/country',
    },
    {
      id: 3,
      title: '絨毛玩偶 心之谷 阿月',
      price: 'NT$2,750',
      img1: '/country-road/country-road3-1.webp',
      img2: '/country-road/country-road3-2.webp',
      link: '/country',
    },
    {
      id: 4,
      title: '好朋友沙包系列 心之谷 阿月',
      price: 'NT$980',
      img1: '/country-road/country-road4-1.webp',
      img2: '/country-road/country-road4-2.webp',
      link: '/country',
    },
  ];
}
