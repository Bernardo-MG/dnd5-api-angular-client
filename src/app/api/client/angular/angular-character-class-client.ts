import { HttpClient } from "@angular/common/http";
import { ReadOperations } from "@app/api/request/read-operations";
import { Charclass } from "@app/dnd5/models/charclass/charclass";
import { Multiclassing } from "@app/dnd5/models/charclass/multiclassing";
import { Spellcasting } from "@app/dnd5/models/charclass/spellcasting";
import { Observable } from "rxjs";
import { CharacterClassClient } from "../character-class-client";

export class AngularCharacterClassClient implements CharacterClassClient {

  private classUrl = '/classes';

  private spellcastingUrl = '/spellcasting';

  private multiclassingUrl = '/multi-classing';

  private operations: ReadOperations;

  constructor(
    http: HttpClient,
    private index: string
    ) {
    this.operations = new ReadOperations(http);
  }

  public get(): Observable<Charclass> {
    const url = this.getRootUrl();
    return this.operations.fetchOne(url);
  }

  public getSpellCasting(): Observable<Spellcasting> {
    const url = `${this.getRootUrl()}/${this.spellcastingUrl}`;
    return this.operations.fetchOne(url);
  }

  public getMultiClassing(): Observable<Multiclassing> {
    const url = `${this.getRootUrl()}/${this.multiclassingUrl}`;
    return this.operations.fetchOne(url);
  }

  private getRootUrl() {
    return `${this.classUrl}/${this.index}`;
  }

}