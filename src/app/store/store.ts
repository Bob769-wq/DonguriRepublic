import { Component } from '@angular/core';
import { Logo } from '../logo/logo';
import { RouterLink } from '@angular/router';
interface StoreList {
  id: number;
  title: string;
  img: string;
  link: string;
  address: string;
  phone: string;
}
@Component({
  selector: 'app-store',
  imports: [Logo, RouterLink],
  template: `
    <app-logo
      label="/donguri-store/donguri-store-logo.webp"
      label2="/donguri-store/donguri-store-logo-s.webp"
    />
    <div class="max-w-1170 mx-auto px-3.5 pt-5 pb-8">
      <div class="grid md:grid-cols-2 gap-3 md:px-8">
        @for (item of storeItems; track item.id) {
          <a [routerLink]="item.link" class="flex flex-col">
            <div class="h-72">
              <img [src]="item.img" class="h-full w-full object-cover" [alt]="item.title" />
            </div>
            <div class="px-6 py-2">
              <h3 class="text-lg">{{ item.title }}</h3>
              <p class="text-sm">{{ item.address }}</p>
              <p class="text-sm">{{ item.phone }}</p>
            </div>
          </a>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class Store {
  storeItems: StoreList[] = [
    {
      id: 1,
      title: '【橡子共和國 台北信義A8店】',
      address: '■地址:台北市信義區松高路12號 新光三越信義新天地A8 4F',
      phone: '■電話:02-2720-6618',
      link: '/store',
      img: '/donguri-store/store01.jpeg',
    },
    {
      id: 2,
      title: '【橡子共和國 南港LaLaport店】',
      address: '■地址:台北市南港區經貿二路131號 Mitsui Shopping Park LaLaport 南港 4F',
      phone: '■電話:02-2783-3088',
      link: '/store',
      img: '/donguri-store/store02.jpeg',
    },
    {
      id: 3,
      title: '【橡子共和國 台中中港店】',
      address: '■地址:台中市西屯區台灣大道三段301號 新光三越台中中港店 6F',
      phone: '■電話:04-2254-5009',
      link: '/store',
      img: '/donguri-store/store03.jpeg',
    },
    {
      id: 4,
      title: '【橡子共和國 台中LaLaport店】',
      address: '■地址:台中市東區進德路600號 Mitsui Shopping Park LaLaport 台中 北館3F',
      phone: '■電話:04-2211-2018',
      link: '/store',
      img: '/donguri-store/store04.jpeg',
    },
    {
      id: 5,
      title: '【橡子共和國 台南小西門店】',
      address: '■地址:台南市中西區西門路一段658-1號 新光三越台南新天地小西門 B1',
      phone: '■電話:06-213-8858',
      link: '/store',
      img: '/donguri-store/store05.jpeg',
    },
    {
      id: 6,
      title: '【橡子共和國 高雄漢神巨蛋店】',
      address: '■地址:高雄市左營區博愛二路777號 漢神巨蛋購物廣場 6F',
      phone: '■電話:07-522-2038',
      link: '/store',
      img: '/donguri-store/store06.jpeg',
    },
  ];
}
