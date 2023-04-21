import { ReadOperations } from "@app/core/api/client/read-operations";
import { Level } from "@app/dnd5/models/charclass/level";
import { Observable } from "rxjs";
import { CharacterClassQueryLevelByNumber } from "./character-class-query-level-by-number";

export class CharacterClassQueryLevel {
  
  private levelRoute = '/levels';

  constructor(
    private operations: ReadOperations
  ) {
    this.operations.appendRoute(this.levelRoute);
  }

  public getAll(): Observable<Level[]> {
    return this.operations.fetch();
  }

  public level(level: number) {
    this.operations.appendRoute(`/${level}`);
    return new CharacterClassQueryLevelByNumber(this.operations);
  }

}