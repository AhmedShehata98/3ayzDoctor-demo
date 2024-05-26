import { Component } from '@angular/core';
import { GlobalsModule } from '../../../../shared/globals.module';

@Component({
  selector: 'app-search-doctor',
  standalone: true,
  imports: [GlobalsModule],
  providers: [],
  templateUrl: './search-doctor.component.html',
  styleUrl: './search-doctor.component.css',
})
export class SearchDoctorComponent {}
