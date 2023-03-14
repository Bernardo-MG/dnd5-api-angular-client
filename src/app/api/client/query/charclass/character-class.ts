import { ReferenceList } from "@app/dnd5/api/models/reference-list";
import { Observable } from "rxjs";
import { CharacterClassByIndex } from "./character-class-by-index";

export interface CharacterClass {

  getAll(): Observable<ReferenceList>;

  index(index: string): CharacterClassByIndex;

}