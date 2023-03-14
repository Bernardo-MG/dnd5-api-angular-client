import { ReferenceList } from "@app/dnd5/api/models/reference-list";
import { Charclass } from "@app/dnd5/models/charclass/charclass";
import { Multiclassing } from "@app/dnd5/models/charclass/multiclassing";
import { Spellcasting } from "@app/dnd5/models/charclass/spellcasting";
import { Reference } from "@app/dnd5/models/info/reference";
import { Observable } from "rxjs";
import { CharacterClassLevelClient } from "./character-class-level-client";

export interface CharacterClassClient {

  getAll(): Observable<ReferenceList>;

  getOne(index: string): Observable<Charclass>;

  getSpellCasting(index: string): Observable<Spellcasting>;

  getMultiClassing(index: string): Observable<Multiclassing>;

  getSubclasses(index: string): Observable<Reference[]>;

  getSpells(index: string): Observable<Reference[]>;

  getFeatures(index: string): Observable<Reference[]>;

  getProficiencies(index: string): Observable<Reference[]>;

  levels(): CharacterClassLevelClient;

}