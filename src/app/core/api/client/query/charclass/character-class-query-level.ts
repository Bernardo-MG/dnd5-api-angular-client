import { ReadClient } from "@app/core/api/client/read-client";
import { Level } from "@app/dnd5/models/charclass/level";
import { Observable } from "rxjs";
import { CharacterClassQueryLevelByNumber } from "./character-class-query-level-by-number";

export class CharacterClassQueryLevel {
  
  private levelRoute = '/levels';

  constructor(
    private operations: ReadClient
  ) {
    this.operations.appendRoute(this.levelRoute);
  }

  public getAll(): Observable<Level[]> {
    return this.operations.read();
  }

  public level(level: number) {
    this.operations.appendRoute(`/${level}`);
    return new CharacterClassQueryLevelByNumber(this.operations);
  }

}