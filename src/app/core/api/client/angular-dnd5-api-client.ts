import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReadClient } from "@app/core/api/client/read-client";
import { environment } from "environments/environment";
import { AngularReadClient } from "./angular-read-client";
import { Dnd5ApiClient } from "./dnd5-api-client";
import { CharacterClassQuery } from "./query/charclass/character-class-query";
import { ProficiencyQuery } from "./query/charclass/proficiency-query";

@Injectable({
  providedIn: 'root'
})
export class AngularDnd5ApiClient implements Dnd5ApiClient {

  private rootUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  public characterClass(): CharacterClassQuery {
    return new CharacterClassQuery(this.getOperations());
  }

  public proficiency(): ProficiencyQuery {
    return new ProficiencyQuery(this.getOperations());
  }

  private getOperations(): ReadClient {
    return new AngularReadClient(this.http, this.rootUrl);
  }

}