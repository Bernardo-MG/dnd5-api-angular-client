import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReadOperations } from "@app/dnd5/api/operations/read-operations";
import { CharacterClass } from "../../client/query/charclass/character-class";
import { Dnd5ApiClient } from "../../client/dnd5-api-client";
import { AngularReadOperations } from "../operations/angular-read-operations";

@Injectable({
  providedIn: 'root'
})
export class AngularDnd5ApiClient implements Dnd5ApiClient {

  private rootUrl = 'http://www.dnd5eapi.co/api';

  constructor(
    private http: HttpClient
  ) { }

  characterClass(): CharacterClass {
    return new CharacterClass(this.getOperations());
  }

  private getOperations(): ReadOperations {
    return new AngularReadOperations(this.http, this.rootUrl);
  }

}