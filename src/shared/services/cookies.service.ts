import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  constructor() {}

  public getCookie = (key: string): string | -1 => {
    const cookiesList = document.cookie.split(';');
    if (!cookiesList) return -1;
    const foundedCookieIndex = cookiesList.findIndex((cookie) =>
      cookie.includes(key)
    );
    if (foundedCookieIndex === -1) return -1;
    const spitedTarget = cookiesList[foundedCookieIndex].split('=');

    if (foundedCookieIndex === -1) return -1;

    return spitedTarget[1];
  };

  public setCookies(name: string, value: string): void {
    document.cookie = `${name}=${value};`;
  }
}
