import { ReadOperations } from "@app/api/operations/read-operations";
import { ReferenceList } from "@app/dnd5/api/models/reference-list";
import { Observable } from "rxjs";
import { CharacterClassByIndex } from "./character-class-by-index";
import { CharacterClass } from "./character-class";
import { OperationsCharacterClassByIndex } from "./operations-character-class-by-index";

export class OperationsCharacterClass implements CharacterClass {

  private classUrl = '/classes';

  constructor(
    private getOperations: () => ReadOperations
  ) { }

  public getAll(): Observable<ReferenceList> {
    return this.getOperations().url(this.classUrl).fetch();
  }

  public index(index: string): CharacterClassByIndex {
    throw new OperationsCharacterClassByIndex(this.getOperations, index);
  }

}