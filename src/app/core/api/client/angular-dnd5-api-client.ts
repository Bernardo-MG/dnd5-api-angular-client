import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { AngularReadClient } from "./angular-read-client";
import { Dnd5ApiClient } from "./dnd5-api-client";
import { CharacterClassQuery } from "./query/charclass/character-class-query";
import { ProficiencyQuery } from "./query/charclass/proficiency-query";

@Injectable({
  providedIn: 'root'
})
export class AngularDnd5ApiClient implements Dnd5ApiClient {

  private readonly client;

  constructor(
    private http: HttpClient
  ) {
    this.client = new AngularReadClient(this.http, environment.apiUrl);
  }

  public characterClass(): CharacterClassQuery {
    return new CharacterClassQuery(this.client);
  }

  public proficiency(): ProficiencyQuery {
    return new ProficiencyQuery(this.client);
  }

}