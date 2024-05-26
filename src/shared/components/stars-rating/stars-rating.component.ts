import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'stars-rating',
  standalone: true,
  templateUrl: './stars-rating.component.html',
  styleUrl: './stars-rating.component.css',
  imports: [NgClass],
})
export class StarRatingComponent {
  @Input() rate: number = 0;
}
