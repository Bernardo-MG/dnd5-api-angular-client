import { ReferenceList } from "@app/core/api/models/reference-list";
import { Observable } from "rxjs";
import { ReadOperations } from "../../read-operations";
import { SpellQueryByIndex } from "./spell-query-by-index";

export class SpellQuery {

  private spellRoute = '/spells';

  constructor(
    private operations: ReadOperations
  ) {
    this.operations.appendRoute(this.spellRoute);
  }

  public getAll(): Observable<ReferenceList> {
    return this.operations.fetch();
  }

  public index(index: string): SpellQueryByIndex {
    this.operations.appendRoute(`/${index}`);
    return new SpellQueryByIndex(this.operations);
  }

}