import { ReadClient } from "@app/core/api/client/read-client";
import { ReferenceList } from "@app/core/api/models/reference-list";
import { Observable } from "rxjs";
import { CharacterClassQueryByIndex } from "./character-class-query-by-index";

export class CharacterClassQuery {

  private classRoute = '/classes';

  constructor(
    private client: ReadClient
  ) {
    this.client = this.client.appendRoute(this.classRoute);
  }

  public getAll(): Observable<ReferenceList> {
    return this.client.read();
  }

  public index(index: string): CharacterClassQueryByIndex {
    return new CharacterClassQueryByIndex(this.client.appendRoute(`/${index}`));
  }

}