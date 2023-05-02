import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { AngularReadOperations } from "./angular-read-operations";
import { Dnd5ApiClient } from "./dnd5-api-client";
import { CharacterClassQuery } from "./query/charclass/character-class-query";
import { ProficiencyQuery } from "./query/charclass/proficiency-query";
import { SpellQuery } from "./query/charclass/spell-query";
import { ReadOperations } from "./read-operations";

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

  public spell(): SpellQuery {
    return new SpellQuery(this.getOperations());
  }

  private getOperations(): ReadOperations {
    return new AngularReadOperations(this.http, this.rootUrl);
  }

}
