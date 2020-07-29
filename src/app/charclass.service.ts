import { Injectable } from '@angular/core';
import { Charclass } from './charclass';
import { CHARCLASSES } from './mock-charclasses';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharclassService {

  constructor() { }

  getCharClasses(): Observable<Charclass[]> {
    return of(CHARCLASSES);
  }

}
