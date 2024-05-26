import { Component } from '@angular/core';
import { GlobalsModule } from '../../../../shared/globals.module';

@Component({
  selector: 'app-health-steps-list',
  standalone: true,
  imports: [GlobalsModule],
  templateUrl: './health-steps-list.component.html',
  styleUrl: './health-steps-list.component.css',
})
export class HealthStepsListComponent {
  public healthSteps: { id: string; name: string; imgSrc: string }[] = [
    {
      id: '1',
      name: 'checkup',
      imgSrc: 'assets/images/health-steps/pic 10.png',
    },
    {
      id: '2',
      name: 'doctor',
      imgSrc: 'assets/images/health-steps/pic 11.png',
    },
    {
      id: '3',
      name: 'medicine',
      imgSrc: 'assets/images/health-steps/pic 12.png',
    },
  ];
}
