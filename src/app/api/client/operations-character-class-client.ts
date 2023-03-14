import { ApiResponse } from "@app/api/models/api-response";
import { ReadOperations } from "@app/api/operations/read-operations";
import { Charclass } from "@app/dnd5/models/charclass/charclass";
import { Multiclassing } from "@app/dnd5/models/charclass/multiclassing";
import { Spellcasting } from "@app/dnd5/models/charclass/spellcasting";
import { Reference } from "@app/dnd5/models/info/reference";
import { Observable } from "rxjs";
import { CharacterClassClient } from "./character-class-client";

export class OperationsCharacterClassClient implements CharacterClassClient {

  private classUrl = '/classes';

  private spellcastingUrl = '/spellcasting';

  private multiclassingUrl = '/multi-classing';

  constructor(
    private getOperations: () => ReadOperations
  ) { }

  getAll(): Observable<ApiResponse<Reference[]>> {
    return this.getOperations().url(this.classUrl).fetch();
  }

  public getOne(index: string): Observable<Charclass> {
    const url = this.getUrl(index);
    return this.getOperations().url(url).fetch();
  }

  public getSpellCasting(index: string): Observable<Spellcasting> {
    const url = `${this.getUrl(index)}/${this.spellcastingUrl}`;
    return this.getOperations().url(url).fetch();
  }

  public getMultiClassing(index: string): Observable<Multiclassing> {
    const url = `${this.getUrl(index)}/${this.multiclassingUrl}`;
    return this.getOperations().url(url).fetch();
  }

  private getUrl(index: string) {
    return `${this.classUrl}/${index}`;
  }

}