import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
interface NavList {
  id: number;
  title: string;
  link: string;
  children?: NavList[];
  isExpanded?: boolean;
}
@Component({
  selector: 'app-header-nav',
  imports: [RouterLink, ReactiveFormsModule],
  template: `
    <header class="fixed top-0 left-0 right-0 z-[10000] shadow-md">
      <div class="bg-upper-green py-2.5 px-5">
        <a routerLink="/10" class="block text-white text-center leading-4">
          <span>橡子共和國台灣歡慶10週年🎊</span>
        </a>
      </div>
      <div class="media-screen-75rem:px-5 bg-white">
        <div class="media-screen-75rem:p-2 flex items-center">
          <ul class="flex-1 flex gap-4 items-center media-screen-75rem:invisible">
            <li class="cursor-pointer ml-2" (click)="toggleSearchBar()">
              <i class="fa-solid fa-magnifying-glass fa-xl" style="color: currentColor;"></i>
            </li>
            @if (isSearchBarOpen()) {
              <div class="fixed inset-0 z-[11000]">
                <div
                  class="absolute inset-0 bg-black bg-opacity-40"
                  (click)="toggleSearchBar()"
                ></div>
                <div class="fixed top-9 left-0 right-0 bg-white ">
                  <div class="p-4">
                    <form [formGroup]="form" class="flex items-center gap-2" (submit)="submit()">
                      <button type="submit">
                        <i
                          class="fa-solid fa-magnifying-glass fa-xl"
                          style="color: currentColor;"
                        ></i>
                      </button>
                      <input
                        type="text"
                        class="text-lg border-b flex-1 border-b-black outline-none"
                        placeholder="找商品"
                        formControlName="searchControl"
                      />
                    </form>
                  </div>
                </div>
              </div>
            }
            <li>
              <a routerLink="/user"
                ><i class="fa-solid fa-user fa-xl" style="color: currentColor;"></i
              ></a>
            </li>
          </ul>
          <a
            routerLink="/"
            class="flex-1 min-h-10 max-h-36  justify-center media-screen-75rem:flex hidden"
          >
            <img
              src="/logo/logo-normal.webp"
              class=" max-w-full"
              alt="logo"
              [class]="isScrolled() ? 'max-h-14' : 'max-h-28'"
            />
          </a>
          <a routerLink="/" class="flex-1 py-2 px-4 flex justify-center media-screen-75rem:hidden">
            <img src="/logo/logo-small.webp" class="max-w-40 max-h-11  object-contain" alt="logo" />
          </a>
          <ul class="flex-1 flex justify-end items-center gap-5">
            <li class="cursor-pointer media-screen-75rem:block hidden">
              <i class="fa-solid fa-comment fa-xl" style="color: currentColor;"></i>
            </li>
            <li class="cursor-pointer media-screen-75rem:block hidden">
              <form
                [formGroup]="form"
                (submit)="submit()"
                class="flex items-center"
                (mouseenter)="isFormOpen.set(true)"
                (mouseleave)="isFormOpen.set(false)"
              >
                <input
                  class="border-b focus:outline-none transition-all duration-1000 ease-in-out"
                  [class]="isFormOpen() ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'"
                  type="text"
                  placeholder="找商品"
                  formControlName="searchControl"
                />
                <button>
                  <i class="fa-solid fa-magnifying-glass fa-xl" style="color: currentColor;"></i>
                </button>
              </form>
            </li>
            <li class="hidden media-screen-75rem:block ">
              <a routerLink="/user"
                ><i class="fa-solid fa-user fa-xl" style="color: currentColor;"></i
              ></a>
            </li>
            <li class="cursor-pointer hidden media-screen-75rem:block" (click)="toggle1200Cart()">
              <i class="fa-solid fa-bag-shopping fa-xl" style="color: currentColor;"></i>
            </li>
            <li class="cursor-pointer media-screen-75rem:hidden" (click)="toggleCart()">
              <i class="fa-solid fa-bag-shopping fa-xl" style="color: currentColor;"></i>
            </li>
            <li (click)="toggleMenu()" class="media-screen-75rem:hidden cursor-pointer">
              <div class="p-5 bg-menu-bar">
                <i class="fa-solid fa-bars fa-xl" style="color: currentColor;"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-primary-bg media-screen-75rem:block hidden ">
        <ul class="flex justify-center items-center">
          @for (item of navItems; track item.id) {
            <li class="text-nav-font">
              <a class="block px-5 py-3.5" [routerLink]="item.link">{{ item.title }}</a>
            </li>
          }
        </ul>
      </div>
    </header>

    <div
      class="fixed inset-0 bg-black bg-opacity-40 z-[11000]"
      [class]="is1200CartOpen() ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      (click)="toggle1200Cart()"
    ></div>

    <div
      class="fixed top-header-height right-10 h-40 w-72 bg-white z-[12000] overflow-y-auto transition-transform duration-500 ease-in-out"
      [class]="is1200CartOpen() ? 'translate-x-0' : 'translate-x-[calc(100%+2.5rem)]'"
    >
      <div class="flex justify-center items-center h-full">
        <p>你的夠物車是空的</p>
      </div>
    </div>

    <div
      class="fixed inset-0 bg-black bg-opacity-40 z-[11000]"
      [class]="isCartOpen() ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      (click)="toggleCart()"
    ></div>

    <div
      class="fixed top-0 left-0 h-full w-72 bg-white z-[12000] overflow-y-auto transition-transform duration-500 ease-in-out"
      [class]="isCartOpen() ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex h-full items-center justify-center">
        <p>你的購物車是空的</p>
      </div>
    </div>

    <div
      class="fixed inset-0 bg-black bg-opacity-40 z-[11000]"
      [class]="isMenuOpen() ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      (click)="toggleMenu()"
    ></div>
    <div
      class="fixed top-0 left-0 h-full w-72 bg-primary-bg z-[12000] overflow-y-auto transition-transform duration-500 ease-in-out"
      [class]="isMenuOpen() ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="text-nav-font">
        <ul class="flex flex-col items-center text-base">
          @for (item of navItems; track item.id) {
            <li>
              <a [routerLink]="item.link" class="block w-full py-4">{{ item.title }}</a>
            </li>
          }
        </ul>
        <h3 class="text-2xl font-bold text-center">
          <span class="border-t inline-block border-t-nav-font pt-4 px-4">分類</span>
        </h3>
        <ul class="text-center text-base">
          @for (item of sideItems; track item.id) {
            @if (item.children) {
              <li>
                <a [routerLink]="item.link" class="block w-full px-6 py-4 relative">
                  <span>{{ item.title }}</span>
                  <span class="absolute right-0 pr-2" (click)="toggleSub(item)">
                    <i
                      class="fa-solid fa-chevron-down fa-xs border "
                      style="color: currentColor;"
                    ></i>
                  </span>
                </a>
              </li>
              <ul
                class="bg-sub-bg overflow-hidden transition-all duration-500 ease-in-out"
                [class]="item.isExpanded ? 'max-h-96' : 'max-h-0'"
              >
                @for (child of item.children; track child.id) {
                  <li class=" text-center">
                    <a [routerLink]="child.link" class="inline-block px-5 py-4">{{
                      child.title
                    }}</a>
                  </li>
                }
              </ul>
            } @else {
              <li>
                <a [routerLink]="item.link" class="block w-full py-4">{{ item.title }}</a>
              </li>
            }
          }
        </ul>
        <h3 class="text-2xl font-bold text-center">
          <span class="border-t inline-block border-t-nav-font pt-4 px-4">帳戶</span>
        </h3>
        <ul class="flex flex-col items-center text-base">
          @for (item of accountItems; track item.id) {
            <li>
              <a [routerLink]="item.link" class="block w-full py-4">{{ item.title }}</a>
            </li>
          }
        </ul>
        <div class="flex justify-center pb-4">
          <a
            routerLink="/comment"
            class="border rounded-full h-10 w-10 flex items-center justify-center border-nav-font"
          >
            <i class="fa-solid fa-comment fa-xl" style="color: currentColor;"></i>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class HeaderNav {
  isScrolled = signal(false);
  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  fb = inject(NonNullableFormBuilder);
  form = this.fb.group({
    searchControl: this.fb.control('', {
      validators: [Validators.required],
    }),
  });
  submit() {
    if (this.form.invalid) {
      console.error('錯誤');
      return;
    }
    const data = this.form.getRawValue();
    data.searchControl = data.searchControl.trim();
    console.log(data);
  }
  isFormOpen = signal(false);

  isMenuOpen = signal(false);
  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }

  toggleSub(item: NavList) {
    if (item.children) {
      item.isExpanded = !item.isExpanded;
    }
  }

  isSearchBarOpen = signal(false);
  toggleSearchBar() {
    this.isSearchBarOpen.update((value) => !value);
  }
  isCartOpen = signal(false);
  toggleCart() {
    this.isCartOpen.update((value) => !value);
  }
  is1200CartOpen = signal(false);
  toggle1200Cart() {
    this.is1200CartOpen.update((value) => !value);
  }

  navItems: NavList[] = [
    { id: 1, title: '首頁', link: '/nav' },
    { id: 2, title: '所有商品', link: '/nav' },
    { id: 3, title: '作品分類', link: '/nav' },
    { id: 4, title: '崖上的波妞 Goods Collection', link: '/nav' },
    { id: 5, title: '部落格首頁', link: '/nav' },
    { id: 6, title: '最後庫存❗', link: '/nav' },
    { id: 7, title: '會員權益', link: '/nav' },
  ];
  sideItems: NavList[] = [
    {
      id: 1,
      title: '依作品分類',
      link: '/sub',
      isExpanded: false,
      children: [{ id: 1, title: '龍貓', link: '/work' }],
    },
    { id: 2, title: '精選商品', link: '/sub' },
    {
      id: 3,
      title: '玩具．玩偶類',
      link: '/sub',
      isExpanded: false,
      children: [{ id: 1, title: '玩偶', link: '/work' }],
    },
    {
      id: 4,
      title: '裝飾品類',
      link: '/sub',
      isExpanded: false,
      children: [{ id: 1, title: '市內擺設', link: '/work' }],
    },
    {
      id: 5,
      title: '居家用品類',
      link: '/sub',
      isExpanded: false,
      children: [{ id: 1, title: '手巾．手帕', link: '/work' }],
    },
    {
      id: 6,
      title: '包包',
      link: '/sub',
      isExpanded: false,
      children: [{ id: 1, title: '托特包．手提包', link: '/work' }],
    },
    {
      id: 7,
      title: '服飾類',
      link: '/sub',
      isExpanded: false,
      children: [{ id: 1, title: '衣服', link: '/work' }],
    },
    {
      id: 8,
      title: '飾品類',
      link: '/sub',
      isExpanded: false,
      children: [{ id: 1, title: '髮飾', link: '/work' }],
    },
    { id: 9, title: '吊飾類', link: '/sub' },
    {
      id: 10,
      title: '文具類',
      link: '/sub',
      isExpanded: false,
      children: [{ id: 1, title: '筆．筆袋', link: '/work' }],
    },
    {
      id: 11,
      title: '影音．書籍類',
      link: '/sub',
      isExpanded: false,
      children: [{ id: 1, title: '書籍', link: '/work' }],
    },
    {
      id: 12,
      title: '季節性商品類',
      link: '/sub',
      isExpanded: false,
      children: [{ id: 1, title: '節慶物品', link: '/work' }],
    },
    { id: 13, title: 'GBL', link: '/sub' },
    { id: 14, title: '傳統工藝', link: '/sub' },
    {
      id: 15,
      title: '新商品',
      link: '/sub',
      isExpanded: false,
      children: [{ id: 1, title: '2025.10新商品', link: '/work' }],
    },
    { id: 16, title: '包裝用品', link: '/sub' },
    { id: 17, title: '最後庫存❗️', link: '/sub' },
    { id: 18, title: 'DIY動手做', link: '/sub' },
    { id: 19, title: '好友同款推薦💛', link: '/sub' },
  ];
  accountItems: NavList[] = [
    { id: 1, title: '會員登入', link: '/account' },
    { id: 2, title: '新用戶註冊', link: '/account' },
  ];
}
