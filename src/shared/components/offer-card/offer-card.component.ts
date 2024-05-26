import { Component, Input } from '@angular/core';
import { IOffer } from '../../../types/IOffer';
import { CurrencyPipe, NgClass, NgIf } from '@angular/common';
import { StarRatingComponent } from '../stars-rating/stars-rating.component';
import { GlobalsModule } from '../../globals.module';

@Component({
  selector: 'offer-card',
  templateUrl: './offer-card.component.html',
  standalone: true,
  imports: [CurrencyPipe, NgClass, NgIf, StarRatingComponent, GlobalsModule],
})
export class OfferCardComponent {
  @Input() offer: IOffer = {
    id: '-1',
    category: 'NA',
    cover: null,
    description: 'NA',
    discount: 0,
    price: 0,
    doctorName: 'NA',
    rate: 0,
    visitors: 0,
  };
}
