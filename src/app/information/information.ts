import { Component } from '@angular/core';
import { Logo } from '../logo/logo';
import { RouterLink } from '@angular/router';
interface InfoList {
  id: number;
  date: string;
  children: InfoNotice[];
}
interface InfoNotice {
  id: number;
  link: string;
  title: string;
}
@Component({
  selector: 'app-information',
  imports: [Logo, RouterLink],
  template: `
    <app-logo
      label="/information/information-logo.webp"
      label2="/information/information-logo-s.webp"
    />
    <div class="max-w-1170 mx-auto px-3.5">
      <div class="flex flex-col gap-2 md:px-10">
        @for (item of infoItems; track item.id) {
          <div class="font-bold">{{ item.date }}</div>
          @for (child of item.children; track child.id) {
            <a [routerLink]="child.link" class="text-info-link-color-blue">{{ child.title }}</a>
          }
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class Information {
  infoItems: InfoList[] = [
    {
      id: 1,
      date: '2025.1.14',
      children: [{ id: 1, title: '【重要】2025年春節連假出貨公告', link: '/info' }],
    },
    {
      id: 2,
      date: '2024.12.25',
      children: [{ id: 1, title: '【橡子小故事】Vol.01「音樂盒 心之谷 貓男爵」', link: '/info' }],
    },
    {
      id: 3,
      date: '2024.03.22',
      children: [
        { id: 1, title: '【重要】全新官方會員制度即將於2024年4月1日正式啟用', link: '/info' },
      ],
    },
  ];
}
