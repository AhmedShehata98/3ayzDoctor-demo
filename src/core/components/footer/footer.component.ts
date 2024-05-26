import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GlobalsModule } from '../../../shared/globals.module';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule, GlobalsModule],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.components.css',
})
export class FooterComponent {
  specializationsOfDoctors = Array(6).fill(0);
}
