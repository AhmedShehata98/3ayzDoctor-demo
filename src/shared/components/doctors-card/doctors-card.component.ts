import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IDoctor } from '../../../types/doctor-card';
import { CurrencyPipe } from '@angular/common';
import { StarRatingComponent } from '../stars-rating/stars-rating.component';
import { GlobalsModule } from '../../globals.module';

@Component({
  selector: 'doctor-card',
  imports: [MatIconModule, CurrencyPipe, StarRatingComponent, GlobalsModule],
  standalone: true,
  templateUrl: './doctors-card.component.html',
  styleUrl: './doctors-card.component.css',
})
export class DoctorCardComponent {
  @Input() doctorData: IDoctor = {
    id: '-1',
    name: 'NA',
    cover: 'assets/images/doctor.png',
    description: 'NA',
    price: 0,
    rate: 0,
    visitors: 0,
  };
}
