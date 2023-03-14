import { ReadOperations } from "@app/api/operations/read-operations";
import { Level } from "@app/dnd5/models/charclass/level";
import { Observable } from "rxjs";
import { CharacterClassLevelByNumber } from "./character-class-level-by-number";

export class CharacterClassLevel {
  
  private levelRoute = '/level';

  constructor(
    private operations: ReadOperations
  ) {
    this.operations.appendRoute(`/${this.levelRoute}`);
  }

  public getAll(): Observable<Level[]> {
    return this.operations.fetch();
  }

  public level(level: number) {
    this.operations.appendRoute(`/${level}`);
    return new CharacterClassLevelByNumber(this.operations);
  }

}