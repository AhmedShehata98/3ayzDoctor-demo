import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

import { HomeComponent } from '../app/home/home.component';

@NgModule({
  declarations: [],
  imports: [TranslateModule, FormsModule, HomeComponent],
  providers: [TranslatePipe],
  exports: [TranslateModule, FormsModule, TranslatePipe],
})
export class GlobalsModule {}
