import { HttpClient } from "@angular/common/http";
import { CharacterClassClient } from "../character-class-client";
import { Dnd5ApiClient } from "../dnd5-api-client";
import { AngularCharacterClassClient } from "./angular-character-class-client";

export class AngularDnd5ApiClient implements Dnd5ApiClient {

  constructor(
    private http: HttpClient
  ) { }

  getCharacterClass(index: string): CharacterClassClient {
    return new AngularCharacterClassClient(this.http, index);
  }

}