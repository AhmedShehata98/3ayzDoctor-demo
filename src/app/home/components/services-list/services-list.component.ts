import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { IService } from '../../../../types/IService';
import { ServiceCardComponent } from '../../../../shared/components/service-card/service-card.component';
import { GlobalsModule } from '../../../../shared/globals.module';
import { TranslationService } from '../../../../shared/services/translation.service';
import { Locale } from '../../../../enums/locale';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [ServiceCardComponent, GlobalsModule],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServicesListComponent {
  private _servicesEnglish: IService[] = [
    {
      id: '1',
      cover: 'https://picsum.photos/id/5/450/301',
      title: 'book a doctor',
      description: 'book an appointment',
    },
    {
      id: '2',
      cover: 'https://picsum.photos/id/1/450/300',
      title: 'hospital / Medical center',
      description: 'search for a hospital / Medical center',
    },
    {
      id: '3',
      cover: 'https://picsum.photos/id/2/450/300',
      title: 'medical services',
      description: 'best medical services offers',
    },
    {
      id: '4',
      cover: 'https://picsum.photos/id/3/450/300',
      title: 'medical services',
      description: 'best medical services offers',
    },
    {
      id: '5',
      cover: 'https://picsum.photos/id/4/450/300',
      title: 'medical services',
      description: 'best medical services offers',
    },
  ];

  private _servicesArabic: IService[] = [
    {
      id: '1',
      cover: 'https://picsum.photos/id/5/450/301',
      title: 'حجز طبيب',
      description: 'حجز موعد',
    },
    {
      id: '2',
      cover: 'https://picsum.photos/id/1/450/300',
      title: 'مستشفى / مركز طبي',
      description: 'البحث عن مستشفى / مركز طبي',
    },
    {
      id: '3',
      cover: 'https://picsum.photos/id/2/450/300',
      title: 'خدمات طبية',
      description: 'أفضل عروض الخدمات الطبية',
    },
    {
      id: '4',
      cover: 'https://picsum.photos/id/3/450/300',
      title: 'خدمات طبية',
      description: 'أفضل عروض الخدمات الطبية',
    },
    {
      id: '5',
      cover: 'https://picsum.photos/id/4/450/300',
      title: 'خدمات طبية',
      description: 'أفضل عروض الخدمات الطبية',
    },
  ];

  public currentLanguage: Locale | undefined;
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
      slidesPerView: 3,
      spaceBetween: 14,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    1368: {
      slidesPerView: 4,
      spaceBetween: 14,
    },
  });

  public services: IService[] = [];

  constructor(private _translationService: TranslationService) {
    if (_translationService.currentLanguage === Locale['en-US']) {
      this.services.push(...this._servicesEnglish);
    } else {
      this.services.push(...this._servicesArabic);
    }
  }
}
