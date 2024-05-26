import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../core/components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../core/components/footer/footer.component';
import { TranslationService } from '../shared/services/translation.service';
import { GlobalsModule } from '../shared/globals.module';
import { Locale } from '../enums/locale';
import { CookiesService } from '../shared/services/cookies.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MatIconModule,
    GlobalsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = '3ayzdoctor';

  constructor(
    private _translationService: TranslationService,
    private _cookiesService: CookiesService
  ) {}

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      const lang = this._cookiesService.getCookie('lang');
      if (lang !== -1) {
        this._translationService.setDefaultLanguage(lang as Locale);
        if (lang === Locale['en-US']) {
          this._translationService.toggleDocumentLanguageAndDir('en', 'ltr');
        } else {
          this._translationService.toggleDocumentLanguageAndDir('ar', 'rtl');
        }
      } else {
        this._translationService.setDefaultLanguage(Locale['en-US']);
        this._translationService.toggleDocumentLanguageAndDir('en', 'ltr');
      }
    }
  }
}
