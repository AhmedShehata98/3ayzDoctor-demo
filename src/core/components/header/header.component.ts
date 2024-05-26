import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { GlobalsModule } from '../../../shared/globals.module';
import { TranslationService } from '../../../shared/services/translation.service';
import { ILocale } from '../../../types/Ilocale';
import { Locale } from '../../../enums/locale';
import { CookiesService } from '../../../shared/services/cookies.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    NgClass,
    NgIf,
    ModalComponent,
    GlobalsModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isHideMobileMenu = true;
  isShowLoginModal = false;
  isShowSignupModal = false;
  APP_LOCALES_LANGS: ILocale[] = [
    {
      id: '1',
      value: Locale['en-US'],
      label: 'english',
    },
    {
      id: '1',
      value: Locale['ar-EG'],
      label: 'العربية',
    },
  ];
  selectedLanguage = this.APP_LOCALES_LANGS[0].value;

  constructor(
    private _translationService: TranslationService,
    private _cookiesService: CookiesService
  ) {}

  ngOnInit(): void {
    const lang = this._cookiesService.getCookie('lang');

    if (lang !== -1) {
      if (lang === Locale['en-US']) {
        this.selectedLanguage = this.APP_LOCALES_LANGS.find(
          (lang) => lang.value === Locale['en-US']
        )?.value as Locale;
        return;
      }
      this.selectedLanguage = this.APP_LOCALES_LANGS.find(
        (lang) => lang.value === Locale['ar-EG']
      )?.value as Locale;
      return;
    } else {
      this.selectedLanguage = this.APP_LOCALES_LANGS.find(
        (lang) => lang.value === Locale['en-US']
      )?.value as Locale;
      return;
    }
  }

  public toggleShowMobileMenu(): void {
    this.isHideMobileMenu = !this.isHideMobileMenu;
  }
  public toggleShowLoginModal(): void {
    this.isShowSignupModal = false;
    this.isShowLoginModal = true;
  }
  public toggleShowSignupModal(): void {
    this.isShowLoginModal = false;
    this.isShowSignupModal = true;
  }

  public onChangeLanguages(ev: Event): void {
    // const target = ev.target as HTMLSelectElement;
    this._translationService.setDefaultLanguage(this.selectedLanguage);
    if (this.selectedLanguage === Locale['en-US']) {
      this._translationService.toggleDocumentLanguageAndDir('en', 'ltr');
    } else {
      this._translationService.toggleDocumentLanguageAndDir('ar', 'rtl');
    }
    this._cookiesService.setCookies('lang', this.selectedLanguage);
  }
}
