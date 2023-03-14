import { ReadOperations } from "@app/api/request/read-operations";
import { Charclass } from "@app/dnd5/models/charclass/charclass";
import { Multiclassing } from "@app/dnd5/models/charclass/multiclassing";
import { Spellcasting } from "@app/dnd5/models/charclass/spellcasting";
import { Observable } from "rxjs";
import { CharacterClassClient } from "../character-class-client";

export class OperationsCharacterClassClient implements CharacterClassClient {

  private classUrl = '/classes';

  private spellcastingUrl = '/spellcasting';

  private multiclassingUrl = '/multi-classing';

  constructor(
    private getOperations: () => ReadOperations,
    private index: string
  ) { }

  public get(): Observable<Charclass> {
    const url = this.getRootUrl();
    return this.getOperations().fetchOne(url);
  }

  public getSpellCasting(): Observable<Spellcasting> {
    const url = `${this.getRootUrl()}/${this.spellcastingUrl}`;
    return this.getOperations().fetchOne(url);
  }

  public getMultiClassing(): Observable<Multiclassing> {
    const url = `${this.getRootUrl()}/${this.multiclassingUrl}`;
    return this.getOperations().fetchOne(url);
  }

  private getRootUrl() {
    return `${this.classUrl}/${this.index}`;
  }

}