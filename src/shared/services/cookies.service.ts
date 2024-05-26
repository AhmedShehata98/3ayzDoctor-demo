import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  constructor(private _cookieService: CookieService) {}

  public getCookie = (key: string): string | -1 => {
    const cookieValue = this._cookieService.get(key);
    if (!cookieValue) return -1;

    return cookieValue;
  };

  public setCookies(name: string, value: string): void {
    this._cookieService.set(name, value);
  }
}
