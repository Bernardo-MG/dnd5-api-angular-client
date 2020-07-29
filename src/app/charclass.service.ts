import { Injectable } from '@angular/core';
import { Charclass } from './charclass';
import { ApiResponse } from './api-response';
import { CHARCLASSES } from './mock-charclasses';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharclassService {

  private heroesUrl = 'https://www.dnd5eapi.co/api/classes';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getCharClasses(): Observable<Charclass[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<ApiResponse<Charclass[]>>(this.heroesUrl).pipe(map((response: ApiResponse<Charclass[]>) => {return response.results}));
  }

  getCharClass(id: string): Observable<Charclass> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(CHARCLASSES.find(charclass => charclass.index === id));
  }

}
