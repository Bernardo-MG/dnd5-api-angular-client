import { Injectable } from '@angular/core';
import { Charclass } from './charclass';
import { CHARCLASSES } from './mock-charclasses';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CharclassService {

  constructor(private messageService: MessageService) { }

  getCharClasses(): Observable<Charclass[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(CHARCLASSES);
  }

  getCharClass(id: string): Observable<Charclass> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(CHARCLASSES.find(charclass => charclass.index === id));
  }

}
