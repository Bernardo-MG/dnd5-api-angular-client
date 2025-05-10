import { ReadClient } from "@app/core/api/client/read-client";
import { ReferenceList } from "@app/core/api/models/reference-list";
import { Observable } from "rxjs";
import { CharacterClassQueryByIndex } from "./character-class-query-by-index";

export class CharacterClassQuery {

  private classRoute = '/classes';

  constructor(
    private operations: ReadClient
  ) {
    this.operations.appendRoute(this.classRoute);
  }

  public getAll(): Observable<ReferenceList> {
    return this.operations.read();
  }

  public index(index: string): CharacterClassQueryByIndex {
    this.operations.appendRoute(`/${index}`);
    return new CharacterClassQueryByIndex(this.operations);
  }

}