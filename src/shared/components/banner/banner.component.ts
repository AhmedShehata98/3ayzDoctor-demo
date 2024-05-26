import { Component, Input } from '@angular/core';

@Component({
  selector: 'banner',
  imports: [],
  standalone: true,
  templateUrl: './banner.component.html',
})
export class BannerComponent {
  @Input() imgSrc: string = '';
}
