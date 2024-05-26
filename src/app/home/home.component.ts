import { Component } from '@angular/core';
import { SearchDoctorComponent } from './components/search-doctor/search-doctor.component';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { BannersListComponent } from './components/banners-list/banners-list.component';
import { OffersListComponent } from './components/offers-list/offers-list.component';
import { SpecialitiesListComponent } from './components/specialities-list/specialities-list.component';
import { HealthStepsListComponent } from './components/health-steps-list/health-steps-list.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { GlobalsModule } from '../../shared/globals.module';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchDoctorComponent,
    DoctorsListComponent,
    ServicesListComponent,
    BannersListComponent,
    OffersListComponent,
    SpecialitiesListComponent,
    HealthStepsListComponent,
    CommentsListComponent,
    GlobalsModule,
  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public sliderBreakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    1360: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  };
}
