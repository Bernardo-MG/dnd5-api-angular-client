import { ReadClient } from "@app/core/api/client/read-client";
import { ReferenceList } from "@app/core/api/models/reference-list";
import { Observable } from "rxjs";
import { ProficiencyQueryByIndex } from "./proficiency-query-by-index";

export class ProficiencyQuery {

  private proficiencyRoute = '/proficiencies';

  constructor(
    private client: ReadClient
  ) {
    this.client = this.client.appendRoute(this.proficiencyRoute);
  }

  public getAll(): Observable<ReferenceList> {
    return this.client.read();
  }

  public index(index: string): ProficiencyQueryByIndex {
    return new ProficiencyQueryByIndex(this.client.appendRoute(`/${index}`));
  }

}