import { ReadClient } from "@app/core/api/client/read-client";
import { Proficiency } from "@app/dnd5/models/charclass/proficiency";
import { Observable } from "rxjs";

export class ProficiencyQueryByIndex {

  constructor(
    private client: ReadClient
  ) {  }

  public getOne(): Observable<Proficiency> {
    return this.client.read();
  }

}