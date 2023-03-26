import { ReadOperations } from "@app/dnd5/api/operations/read-operations";
import { Proficiency } from "@app/dnd5/models/charclass/proficiency";
import { Observable } from "rxjs";

export class ProficiencyQueryByIndex {

  constructor(
    private operations: ReadOperations
  ) {  }

  public getOne(): Observable<Proficiency> {
    return this.operations.fetch();
  }

}