import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface CrumbList {
  id: number;
  title: string;
  link?: string;
  others?: string;
  contact?: string;
}
@Component({
  selector: 'app-crumb',
  imports: [RouterLink],
  template: `
    <div class="max-w-1170 mx-auto px-3.5">
      <div class="grid md:grid-cols-3 py-14 md:px-10 border-t">
        <div class="p-3.5">
          <h3 class="text-lg">關於我們</h3>
          <ul class="mt-5">
            @for (item of aboutUs; track item.id) {
              <li>
                <a [routerLink]="item.link">{{ item.title }}</a>
              </li>
            }
          </ul>
        </div>
        <div class="p-3.5">
          <h3 class="text-lg">顧客服務</h3>
          <ul class="mt-5">
            @for (item of service; track item.id) {
              <li>
                <a [routerLink]="item.link">{{ item.title }}</a>
              </li>
            }
          </ul>
        </div>
        <div class="p-3.5">
          <h3 class="text-lg">聯絡我們</h3>
          <ul class="mt-5">
            @for (item of contactUs; track item.id) {
              <li>
                <span class="font-bold">{{ item.title }}</span> / <span>{{ item.others }}</span>
              </li>
            }
            <li class="flex gap-2 mt-8">
              <a href="/">
                <i class="fa-brands fa-facebook fa-2xl" style="color: currentColor;"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-square-instagram fa-2xl" style="color: currentColor;"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-youtube fa-2xl" style="color: currentColor;"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex gap-2 md:px-10 pb-16">
        <img src="/visa.svg" alt="visa" />
        <img src="/master.svg" alt="master" />
        <img src="/jcb.svg" alt="jcb" />
      </div>
    </div>
  `,
  styles: ``,
})
export class Crumb {
  aboutUs: CrumbList[] = [
    { id: 1, title: '品牌故事', link: '/about' },
    { id: 2, title: '聯絡我們', link: '/about' },
  ];
  service: CrumbList[] = [
    { id: 1, title: '會員權益', link: '/service' },
    { id: 2, title: '條款與細則', link: '/service' },
    { id: 3, title: '運送政策', link: '/service' },
    { id: 4, title: '退換貨政策', link: '/service' },
    { id: 5, title: '隱私權條款', link: '/service' },
  ];
  contactUs: CrumbList[] = [
    { id: 1, title: '客服電話', others: '0800-088-150' },
    { id: 1, title: '客服信箱', others: 'donguritw.onlineshop@donguri.com.tw' },
    { id: 1, title: '合作及徵才時間', others: 'benelic.tw@gmail.com' },
    { id: 1, title: '服務時間', others: '週一至週五 11:00~18:00 (國定假日、例假日除外)' },
  ];
}
