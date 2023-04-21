import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReadOperations } from "@app/core/api/client/read-operations";
import { AngularReadOperations } from "./angular-read-operations";
import { Dnd5ApiClient } from "./dnd5-api-client";
import { CharacterClassQuery } from "./query/charclass/character-class-query";
import { ProficiencyQuery } from "./query/charclass/proficiency-query";

@Injectable({
  providedIn: 'root'
})
export class AngularDnd5ApiClient implements Dnd5ApiClient {

  private rootUrl = 'http://www.dnd5eapi.co/api';

  constructor(
    private http: HttpClient
  ) { }

  public characterClass(): CharacterClassQuery {
    return new CharacterClassQuery(this.getOperations());
  }

  public proficiency(): ProficiencyQuery {
    return new ProficiencyQuery(this.getOperations());
  }

  private getOperations(): ReadOperations {
    return new AngularReadOperations(this.http, this.rootUrl);
  }

}