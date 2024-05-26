import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ServiceCardComponent } from '../../../../shared/components/service-card/service-card.component';
import { IService } from '../../../../types/IService';
import { GlobalsModule } from '../../../../shared/globals.module';
import { Locale } from '../../../../enums/locale';
import { TranslationService } from '../../../../shared/services/translation.service';

@Component({
  selector: 'app-specialities-list',
  standalone: true,
  imports: [ServiceCardComponent, GlobalsModule],
  templateUrl: './specialities-list.component.html',
  styleUrl: './specialities-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SpecialitiesListComponent {
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
  public specialties: IService[] = [];
  private specialtiesArabic: IService[] = [
    {
      id: '1',
      cover: 'assets/images/specialities/sp-dentist@2x.jpg',
      title: 'Nutrition and Nutrition',
      description:
        ' Get guidance on eating right, weight management and sports nutrition ',
    },
    {
      id: '2',
      cover: 'assets/images/specialities/sp-dietitian@2x.jpg',
      title: ' Physiotherapist  ',
      description:
        '  Pulled a muscle? Get it treated by a trained physiotherapist  ',
    },
    {
      id: '3',
      cover: 'assets/images/specialities/sp-general-doctor@2x.jpg',
      title: '  Obstetrics and Gynecology   ',
      description: '  Child Specialists and Doctors for Infant ',
    },
    {
      id: '4',
      cover: 'assets/images/specialities/sp-general-surgeon@2x.jpg',
      title: ' Dentist ',
      description: ' Teething troubles? Schedule a dental checkup ',
    },
    {
      id: '5',
      cover: 'assets/images/specialities/sp-orthopedist@2x.jpg',
      title: '   Neurosurgery   ',
      description: ' Find the right family doctor in your neighborhood ',
    },
    {
      id: '6',
      cover: 'assets/images/specialities/sp-pediatrician@2x.jpg',
      title: ' Cardiothoracic Surgery ',
      description: ' Need to get operated? Find the right surgeon ',
    },
  ];
  private specialtiesEnglish: IService[] = [
    {
      id: '1',
      cover: 'assets/images/specialities/sp-dentist@2x.jpg',
      title: 'التغذية والتغذية',
      description:
        'الحصول على إرشادات حول الأكل الصحي، إدارة الوزن وتغذية الرياضة',
    },
    {
      id: '2',
      cover: 'assets/images/specialities/sp-dietitian@2x.jpg',
      title: 'أخصائي علاج طبيعي',
      description: 'شد عضلة؟ احصل على العلاج من أخصائي علاج طبيعي مدرب',
    },
    {
      id: '3',
      cover: 'assets/images/specialities/sp-general-doctor@2x.jpg',
      title: 'النساء والتوليد',
      description: 'أخصائيين الأطفال والأطباء للرضع',
    },
    {
      id: '4',
      cover: 'assets/images/specialities/sp-general-surgeon@2x.jpg',
      title: 'طبيب أسنان',
      description: 'مشاكل الأسنان؟ حدد موعدًا لفحص الأسنان',
    },
    {
      id: '5',
      cover: 'assets/images/specialities/sp-orthopedist@2x.jpg',
      title: 'جراحة الأعصاب',
      description: 'ابحث عن طبيب الأسرة المناسب في منطقتك',
    },
    {
      id: '6',
      cover: 'assets/images/specialities/sp-pediatrician@2x.jpg',
      title: 'جراحة القلب والصدر',
      description: 'بحاجة إلى عملية؟ ابحث عن الجراح المناسب',
    },
  ];

  constructor(private _translationService: TranslationService) {
    if (_translationService.currentLanguage === Locale['en-US']) {
      this.specialties.push(...this.specialtiesEnglish);
    } else {
      this.specialties.push(...this.specialtiesArabic);
    }
  }
}
