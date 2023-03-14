import { Feature } from "@app/dnd5/models/charclass/feature";
import { Level } from "@app/dnd5/models/charclass/level";
import { Spell } from "@app/dnd5/models/charclass/spell";
import { Observable } from "rxjs";

export interface CharacterClassLevel {

  getAll(): Observable<Level[]>;

  getOne(level: number): Observable<Level>;

  getFeatures(level: number): Observable<Feature>;

  getSpells(level: number): Observable<Spell>;

}