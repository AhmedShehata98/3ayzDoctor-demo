import { Component, Input } from '@angular/core';
import { IService } from '../../../types/IService';

@Component({
  selector: 'service-card',
  imports: [],
  standalone: true,
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css',
})
export class ServiceCardComponent {
  @Input() service: IService = {
    id: '-1',
    cover: null,
    title: 'NA',
    description: 'NA',
  };
}
