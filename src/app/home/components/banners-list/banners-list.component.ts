import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { BannerComponent } from '../../../../shared/components/banner/banner.component';

@Component({
  selector: 'app-banners-list',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './banners-list.component.html',
  styleUrl: './banners-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannersListComponent {
  public banners: { id: string; src: string }[] = [
    {
      id: '1',
      src: 'assets/images/banners/dentest.jpg',
    },
    {
      id: '2',
      src: 'assets/images/banners/derma e.jpg',
    },
    {
      id: '3',
      src: 'assets/images/banners/ped e.jpg',
    },
  ];
}
