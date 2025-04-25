import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  menuActive = signal<boolean>(false);

  toggleMenu() {
    this.menuActive.set(!this.menuActive());
  }

}
