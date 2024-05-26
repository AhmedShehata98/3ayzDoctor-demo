import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import {
  TranslateCompiler,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';

const translateFolderDir = 'assets/i18n/';

const httpLoaderFactory = (http: HttpClient) =>
  new TranslateHttpLoader(http, translateFolderDir, '.json');
const translateCompilerFactory = () => new TranslateMessageFormatCompiler();

const translateLoaderProvider: Provider = {
  provide: TranslateLoader,
  useFactory: httpLoaderFactory,
  deps: [HttpClient],
};
const translateCompilerProvider: Provider = {
  provide: TranslateCompiler,
  useFactory: translateCompilerFactory,
};

NgModule({});
export class AppTranslatorModule {
  static forRoot(): ModuleWithProviders<AppTranslatorModule> {
    return TranslateModule.forRoot({
      loader: translateLoaderProvider,
      compiler: translateCompilerProvider,
    });
  }
  static forChild = (): ModuleWithProviders<AppTranslatorModule> =>
    TranslateModule.forChild({
      loader: translateLoaderProvider,
      compiler: translateCompilerProvider,
      isolate: false,
    });
}
