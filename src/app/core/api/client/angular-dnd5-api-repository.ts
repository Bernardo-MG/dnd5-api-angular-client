import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { AngularReadClient } from "./angular-read-client";
import { Dnd5Repository } from "./dnd5-api-repository";
import { CharacterClassQuery } from "./query/charclass/character-class-query";
import { ProficiencyQuery } from "./query/charclass/proficiency-query";

@Injectable({
  providedIn: 'root'
})
export class AngularDnd5ApiRepository implements Dnd5Repository {

  private readonly client;

  constructor(
    http: HttpClient
  ) {
    this.client = new AngularReadClient(http, environment.apiUrl);
  }

  public characterClass(): CharacterClassQuery {
    return new CharacterClassQuery(this.client);
  }

  public proficiency(): ProficiencyQuery {
    return new ProficiencyQuery(this.client);
  }

}