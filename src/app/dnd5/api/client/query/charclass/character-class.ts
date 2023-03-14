import { ReadOperations } from "@app/dnd5/api/operations/read-operations";
import { ReferenceList } from "@app/dnd5/api/models/reference-list";
import { Observable } from "rxjs";
import { CharacterClassDetails } from "./character-class-by-index";

export class CharacterClass {

  private classRoute = 'classes';

  constructor(
    private operations: ReadOperations
  ) {
    this.operations.appendRoute(this.classRoute);
  }

  public getAll(): Observable<ReferenceList> {
    return this.operations.fetch();
  }

  public index(index: string): CharacterClassDetails {
    this.operations.appendRoute(`/${index}`);
    return new CharacterClassDetails(this.operations);
  }

}