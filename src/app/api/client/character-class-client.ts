import { Charclass } from "@app/dnd5/models/charclass/charclass";
import { Multiclassing } from "@app/dnd5/models/charclass/multiclassing";
import { Spellcasting } from "@app/dnd5/models/charclass/spellcasting";
import { Observable } from "rxjs";

export interface CharacterClassClient {

  get(): Observable<Charclass>;
  
  getSpellCasting(): Observable<Spellcasting>;
  
  getMultiClassing(): Observable<Multiclassing>;

}