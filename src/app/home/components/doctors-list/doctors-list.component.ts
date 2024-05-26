import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { IDoctor } from '../../../../types/doctor-card';
import { DoctorCardComponent } from '../../../../shared/components/doctors-card/doctors-card.component';
import { GlobalsModule } from '../../../../shared/globals.module';

@Component({
  selector: 'app-doctors-list',
  standalone: true,
  imports: [DoctorCardComponent, GlobalsModule],
  providers: [],
  templateUrl: './doctors-list.component.html',
  styleUrl: './doctors-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DoctorsListComponent {
  public doctors: IDoctor[] = [
    {
      id: '1',
      name: 'john Doe',
      cover: null,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit.',
      price: 532,
      rate: 3,
      visitors: 28,
    },
    {
      id: '2',
      name: 'john Doe 2',
      cover: null,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit.',
      price: 410,
      rate: 4,
      visitors: 30,
    },
    {
      id: '3',
      name: 'john Doe 3',
      cover: null,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit.',
      price: 200,
      rate: 5,
      visitors: 120,
    },
    {
      id: '4',
      name: 'john Doe 4',
      cover: null,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit.',
      price: 150,
      rate: 3,
      visitors: 170,
    },
    {
      id: '5',
      name: 'john Doe 5',
      cover: null,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit.',
      price: 345,
      rate: 2,
      visitors: 258,
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
