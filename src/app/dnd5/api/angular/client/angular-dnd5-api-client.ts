import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReadOperations } from "@app/dnd5/api/operations/read-operations";
import { CharacterClassQuery } from "../../client/query/charclass/character-class-query";
import { Dnd5ApiClient } from "../../client/dnd5-api-client";
import { AngularReadOperations } from "../operations/angular-read-operations";
import { ProficiencyQuery } from "../../client/query/charclass/proficiency-query";

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