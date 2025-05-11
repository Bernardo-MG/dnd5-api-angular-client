import { ReadClient } from "@app/core/api/client/read-client";
import { Proficiency } from "@app/core/api/models/charclass/proficiency";
import { Observable } from "rxjs";

export class ProficiencyQueryByIndex {

  constructor(
    private client: ReadClient
  ) {  }

  public getOne = (): Observable<Proficiency> => this.client.read();

}