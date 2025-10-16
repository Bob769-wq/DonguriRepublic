import { Component } from '@angular/core';
import { Button } from '../button/button';
import { RouterLink } from '@angular/router';
import { ProductCardContent } from '../products-carousel/product-card-content';
import { CarouselSection } from '../carousel-section/carousel-section';
interface ProductList {
  id: number;
  title: string;
  price: string;
  img1: string;
  img2?: string;
  link: string;
}
@Component({
  selector: 'app-howl-castle',
  imports: [Button, RouterLink, ProductCardContent, CarouselSection],
  template: `
    <div class="flex justify-center p-3.5">
      <h2 class="text-2xl font-bold">霍爾的移動城堡</h2>
    </div>
    <app-carousel-section [items]="howlItems" />
  `,
  styles: ``,
})
export class HowlCastle {
  howlItems: ProductList[] = [
    {
      id: 1,
      title: '美味系列小盤子 霍爾的移動城堡 培根雞蛋',
      price: 'NT$350',
      img1: '/howl-castle/howl1-1.webp',
      img2: '/howl-castle/howl1-2.webp',
      link: '/howl',
    },
    {
      id: 2,
      title: '胸章精選 霍爾的移動城堡',
      price: 'NT$140',
      img1: '/howl-castle/howl2-1.webp',
      img2: '/howl-castle/howl2-2.webp',
      link: '/howl',
    },
    {
      id: 3,
      title: '刺繡帆布小包 霍爾的移動城堡 焦急的卡西法',
      price: 'NT$790',
      img1: '/howl-castle/howl3-1.webp',
      img2: '/howl-castle/howl3-2.webp',
      link: '/howl',
    },
    {
      id: 4,
      title: 'GBL小油燈鑰匙圈 霍爾的移動城堡 卡西法',
      price: 'NT$650',
      img1: '/howl-castle/howl4-1.webp',
      img2: '/howl-castle/howl4-2.webp',
      link: '/howl',
    },
  ];
}
