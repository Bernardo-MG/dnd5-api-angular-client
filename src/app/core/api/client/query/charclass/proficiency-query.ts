import { ReadClient } from "@app/core/api/client/read-client";
import { ReferenceList } from "@app/core/api/models/reference-list";
import { Observable } from "rxjs";
import { ProficiencyQueryByIndex } from "./proficiency-query-by-index";

export class ProficiencyQuery {

  private proficiencyRoute = '/proficiencies';

  constructor(
    private operations: ReadClient
  ) {
    this.operations.appendRoute(this.proficiencyRoute);
  }

  public getAll(): Observable<ReferenceList> {
    return this.operations.read();
  }

  public index(index: string): ProficiencyQueryByIndex {
    this.operations.appendRoute(`/${index}`);
    return new ProficiencyQueryByIndex(this.operations);
  }

}