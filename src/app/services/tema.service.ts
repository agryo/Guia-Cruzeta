import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  switchTheme(tema: string) {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
        themeLink.href = tema + '.css';
    }
  }
}
