import { ReferenceList } from "@app/core/api/models/reference-list";
import { ReadOperations } from "@app/core/api/client/read-operations";
import { Observable } from "rxjs";
import { ProficiencyQueryByIndex } from "./proficiency-query-by-index";

export class ProficiencyQuery {

  private proficiencyRoute = '/proficiencies';

  constructor(
    private operations: ReadOperations
  ) {
    this.operations.appendRoute(this.proficiencyRoute);
  }

  public getAll(): Observable<ReferenceList> {
    return this.operations.fetch();
  }

  public index(index: string): ProficiencyQueryByIndex {
    this.operations.appendRoute(`/${index}`);
    return new ProficiencyQueryByIndex(this.operations);
  }

}