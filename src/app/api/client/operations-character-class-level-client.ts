import { ReadOperations } from "@app/api/operations/read-operations";
import { Feature } from "@app/dnd5/models/charclass/feature";
import { Level } from "@app/dnd5/models/charclass/level";
import { Spell } from "@app/dnd5/models/charclass/spell";
import { Observable } from "rxjs";
import { CharacterClassLevelClient } from "./character-class-level-client";

export class OperationsCharacterClassLevelClient implements CharacterClassLevelClient {

  constructor(
    private getOperations: () => ReadOperations
  ) { }

  public getAll(): Observable<Level[]> {
    throw new Error("Method not implemented.");
  }

  public getOne(level: number): Observable<Level> {
    throw new Error("Method not implemented.");
  }

  public getFeatures(level: number): Observable<Feature> {
    throw new Error("Method not implemented.");
  }

  public getSpells(level: number): Observable<Spell> {
    throw new Error("Method not implemented.");
  }

}