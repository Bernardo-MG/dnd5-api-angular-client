import { ReadOperations } from "@app/api/operations/read-operations";
import { ReferenceList } from "@app/dnd5/api/models/reference-list";
import { Observable } from "rxjs";
import { CharacterClassByIndex } from "./character-class-by-index";

export class CharacterClass {

  private classUrl = '/classes';

  constructor(
    private getOperations: () => ReadOperations
  ) { }

  public getAll(): Observable<ReferenceList> {
    return this.getOperations().url(this.classUrl).fetch();
  }

  public index(index: string): CharacterClassByIndex {
    throw new CharacterClassByIndex(this.getOperations, index);
  }

}