import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Locale } from '../../enums/locale';
@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  public currentLanguage: Locale = Locale['en-US'];

  constructor(
    private _translateService: TranslateService,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  public setDefaultLanguage = (language: Locale) => {
    this.currentLanguage = language;
    this._translateService.setDefaultLang(language);
  };

  public toggleDocumentLanguageAndDir = (lang: string, dir: string) => {
    if (this._document) {
      this._document.documentElement.lang = lang;
      this._document.documentElement.dir = dir;
    }
  };
}
