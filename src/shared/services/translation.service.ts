import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Locale } from '../../enums/locale';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  public currentLanguage: Locale = Locale['en-US'];

  constructor(private _translateService: TranslateService) {}

  public setDefaultLanguage = (language: Locale) => {
    this.currentLanguage = language;
    this._translateService.setDefaultLang(language);
  };

  public toggleDocumentLanguageAndDir = (lang: string, dir: string) => {
    if (document) {
      window.document.documentElement.lang = lang;
      window.document.documentElement.dir = dir;
    }
  };
}
