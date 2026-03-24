import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSection } from './hero-section/hero-section';
import { Feature } from './feature/feature';
import { HotProducts } from './hot-products/hot-products';
import { NewProducts } from './new-products/new-products';
import { CountryRoad } from './country-road/country-road';
import { HowlCastle } from './howl-castle/howl-castle';
import { Totoro } from './totoro/totoro';
import { Kiki } from './kiki/kiki';
import { Information } from './information/information';
import { ProductsPreview } from './products-preview/products-preview';
import { Store } from './store/store';
import { Crumb } from './crumb/crumb';
import { Footer } from './footer/footer';
import { HeaderNav } from './header-nav/header-nav';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeroSection,
    Feature,
    HotProducts,
    NewProducts,
    CountryRoad,
    HowlCastle,
    Totoro,
    Kiki,
    Information,
    ProductsPreview,
    Store,
    Crumb,
    Footer,
    HeaderNav,
  ],
  template: `
    <app-header-nav />
    <app-hero-section />
    <app-feature />
    <app-hot-products />
    <app-new-products />
    <app-country-road />
    <app-howl-castle />
    <app-totoro />
    <app-kiki />
    <app-information />
    <app-products-preview />
    <app-store />
    <app-crumb />
    <app-footer />
    <div class="text-black text-2xl text-center py-3">test 4</div>
    <div class="text-black text-2xl text-center py-3 bg-red-500">test 5</div>
    <div class="text-gray-600 text-2xl text-center py-3">jojojojojo</div>
  `,
  styles: ``,
})
export class App {
  protected readonly title = signal('DonguriRepublic');
}
