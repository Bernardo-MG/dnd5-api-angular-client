import { ReadClient } from "@app/core/api/client/read-client";
import { Level } from "@app/core/api/models/charclass/level";
import { Observable } from "rxjs";
import { CharacterClassQueryLevelByNumber } from "./character-class-query-level-by-number";

export class CharacterClassQueryLevel {

  constructor(
    private client: ReadClient
  ) {
    this.client = this.client.appendRoute('/levels');
  }

  public getAll = (): Observable<Level[]> => this.client.read();

  public level = (level: number) => new CharacterClassQueryLevelByNumber(this.client.appendRoute(`/${level}`));

}