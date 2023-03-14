import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularReadOperations } from "@app/api/request/angular-read-operations";
import { ReadOperations } from "@app/api/request/read-operations";
import { CharacterClassClient } from "../character-class-client";
import { Dnd5ApiClient } from "../dnd5-api-client";
import { OperationsCharacterClassClient } from "../operations/operations-character-class-client";

@Injectable({
  providedIn: 'root'
})
export class AngularDnd5ApiClient implements Dnd5ApiClient {

  private rootUrl: string = 'http://www.dnd5eapi.co/api';

  constructor(
    private http: HttpClient
  ) { }

  getCharacterClass(): CharacterClassClient {
    return new OperationsCharacterClassClient(this.getOperations.bind(this));
  }

  private getOperations(): ReadOperations {
    return new AngularReadOperations(this.http, this.rootUrl);
  }

}