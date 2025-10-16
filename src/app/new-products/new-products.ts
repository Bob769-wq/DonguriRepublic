import { Component } from '@angular/core';
import { Logo } from '../logo/logo';
import { ProductCardContent } from '../products-carousel/product-card-content';
import { CarouselSection } from '../carousel-section/carousel-section';
interface NewList {
  id: number;
  title: string;
  price: string;
  link: string;
  img1: string;
  img2: string;
}
@Component({
  selector: 'app-new-products',
  imports: [Logo, CarouselSection],
  template: `
    <app-logo
      label="/new-products/new-products-logo.webp"
      label2="/new-products/new-product-logo-s.webp"
    />
    <app-carousel-section [items]="newItems" />
  `,
  styles: ``,
})
export class NewProducts {
  newItems: NewList[] = [
    {
      id: 1,
      title: '夾式耳環 崖上的波妞 搖晃的波妞',
      link: '/new',
      price: 'NT$760',
      img1: '/new-products/new-product1-1.webp',
      img2: '/new-products/new-product1-2.webp',
    },
    {
      id: 2,
      title: '耳環 崖上的波妞 搖晃的波妞',
      link: '/new',
      price: 'NT$760',
      img1: '/new-products/new-product2-1.webp',
      img2: '/new-products/new-product2-2.webp',
    },
    {
      id: 3,
      title: '戒指 崖上的波妞 水母中的波妞',
      link: '/new',
      price: 'NT$620',
      img1: '/new-products/new-product3-1.webp',
      img2: '/new-products/new-product3-2.webp',
    },
    {
      id: 4,
      title: '手鍊 崖上的波妞 波妞的問候',
      link: '/new',
      price: 'NT$900',
      img1: '/new-products/new-product4-1.webp',
      img2: '/new-products/new-product4-2.webp',
    },
  ];
}
