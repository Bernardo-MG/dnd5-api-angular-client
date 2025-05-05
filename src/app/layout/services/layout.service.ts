import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public menuActive = signal<boolean>(false);

  public toggleMenu() {
    this.menuActive.set(!this.menuActive());
  }

}
