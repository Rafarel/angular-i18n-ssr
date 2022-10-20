import {Inject, Injectable, LOCALE_ID} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  constructor(@Inject(LOCALE_ID) public locale: string) { }
}
