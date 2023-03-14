import { Charclass } from "@app/dnd5/models/charclass/charclass";
import { Multiclassing } from "@app/dnd5/models/charclass/multiclassing";
import { Spellcasting } from "@app/dnd5/models/charclass/spellcasting";
import { Reference } from "@app/dnd5/models/info/reference";
import { Observable } from "rxjs";
import { CharacterClassLevel } from "./character-class-level";

export interface CharacterClassByIndex {

  getOne(): Observable<Charclass>;

  getSpellCasting(): Observable<Spellcasting>;

  getMultiClassing(): Observable<Multiclassing>;

  getSubclasses(): Observable<Reference[]>;

  getSpells(): Observable<Reference[]>;

  getFeatures(): Observable<Reference[]>;

  getProficiencies(): Observable<Reference[]>;

  levels(): CharacterClassLevel;

}