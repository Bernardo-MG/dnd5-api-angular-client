import { HttpClient } from "@angular/common/http";
import { AngularReadOperations } from "@app/api/request/angular-read-operations";
import { ReadOperations } from "@app/api/request/read-operations";
import { CharacterClassClient } from "../character-class-client";
import { Dnd5ApiClient } from "../dnd5-api-client";
import { OperationsCharacterClassClient } from "../operations/operations-character-class-client";

export class AngularDnd5ApiClient implements Dnd5ApiClient {

  private operations: ReadOperations;

  constructor(
    http: HttpClient
  ) {
    this.operations = new AngularReadOperations(http);
  }

  getCharacterClass(index: string): CharacterClassClient {
    return new OperationsCharacterClassClient(this.operations, index);
  }

}