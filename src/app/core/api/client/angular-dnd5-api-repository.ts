import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { AngularReadClient } from "./angular-read-client";
import { CharacterClassQuery } from "./query/charclass/character-class-query";
import { ProficiencyQuery } from "./query/charclass/proficiency-query";

@Injectable({
  providedIn: 'root'
})
export class AngularDnd5ApiRepository {

  private readonly client;

  private readonly characterClassQuery;

  private readonly proficiencyQuery;

  constructor(
    http: HttpClient
  ) {
    this.client = new AngularReadClient(http, environment.apiUrl);

    this.characterClassQuery = new CharacterClassQuery(this.client);
    this.proficiencyQuery = new ProficiencyQuery(this.client);
  }

  public characterClass = () => this.characterClassQuery;

  public proficiency = () => this.proficiencyQuery;

}