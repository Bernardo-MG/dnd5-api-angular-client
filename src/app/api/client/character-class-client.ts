import { Charclass } from "@app/dnd5/models/charclass/charclass";
import { Multiclassing } from "@app/dnd5/models/charclass/multiclassing";
import { Spellcasting } from "@app/dnd5/models/charclass/spellcasting";
import { Observable } from "rxjs";
import { ApiResponse } from "../models/api-response";

export interface CharacterClassClient {

  getAll(): Observable<ApiResponse<Charclass[]>>;

  getOne(index: string): Observable<Charclass>;

  getSpellCasting(index: string): Observable<Spellcasting>;

  getMultiClassing(index: string): Observable<Multiclassing>;

}