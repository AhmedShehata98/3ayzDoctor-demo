import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { IOffer } from '../../../../types/IOffer';
import { OfferCardComponent } from '../../../../shared/components/offer-card/offer-card.component';
import { GlobalsModule } from '../../../../shared/globals.module';

@Component({
  selector: 'app-offers-list',
  standalone: true,
  imports: [OfferCardComponent, GlobalsModule],
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OffersListComponent {
  public offers: IOffer[] = [
    {
      id: '1',
      category: 'inBody',
      doctorName: 'jone doe',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      rate: 1,
      visitors: 100,
      cover: 'https://picsum.photos/id/10/251/251',
      discount: 100,
      price: 1000,
    },
    {
      id: '2',
      category: 'عروض خلع',
      doctorName: 'jone doe',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      rate: 1,
      visitors: 50,
      cover: 'https://picsum.photos/id/11/252/252',
      discount: 10,
      price: 1210,
    },
    {
      id: '3',
      category: 'inBody',
      doctorName: 'jone doe',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      rate: 4,
      visitors: 201,
      cover: 'https://picsum.photos/id/10/251/251',
      discount: 100,
      price: 900,
    },
    {
      id: '4',
      category: 'عروض خلع',
      doctorName: 'jone doe',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      rate: 3,
      visitors: 68,
      cover: 'https://picsum.photos/id/11/252/252',
      discount: 25,
      price: 1400,
    },
    {
      id: '5',
      category: 'inBody',
      doctorName: 'jone doe',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      rate: 2,
      visitors: 104,
      cover: 'https://picsum.photos/id/10/251/251',
      discount: 15,
      price: 800,
    },
    {
      id: '6',
      category: 'عروض خلع',
      doctorName: 'jone doe',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      rate: 5,
      visitors: 128,
      cover: 'https://picsum.photos/id/11/252/252',
      discount: 50,
      price: 2000,
    },
  ];
  breakpoints = JSON.stringify({
    248: {
      slidesPerView: 1,
      spaceBetween: 4,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 14,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 14,
    },
    1368: {
      slidesPerView: 5,
      spaceBetween: 14,
    },
  });
}
