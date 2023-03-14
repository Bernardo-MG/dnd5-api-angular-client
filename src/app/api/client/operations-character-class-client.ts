import { ApiResponse } from "@app/api/models/api-response";
import { ReadOperations } from "@app/api/operations/read-operations";
import { Charclass } from "@app/dnd5/models/charclass/charclass";
import { Multiclassing } from "@app/dnd5/models/charclass/multiclassing";
import { Spellcasting } from "@app/dnd5/models/charclass/spellcasting";
import { Reference } from "@app/dnd5/models/info/reference";
import { Observable } from "rxjs";
import { CharacterClassClient } from "./character-class-client";
import { CharacterClassLevelClient } from "./character-class-level-client";
import { OperationsCharacterClassLevelClient } from "./operations-character-class-level-client";

export class OperationsCharacterClassClient implements CharacterClassClient {

  private classUrl = '/classes';

  private spellcastingUrl = '/spellcasting';

  private multiclassingUrl = '/multi-classing';

  private subclassesUrl = '/subclasses';

  private spellsUrl = '/spells';

  private featuresUrl = '/features';

  private proficienciesUrl = '/proficiencies';

  constructor(
    private getOperations: () => ReadOperations
  ) { }

  public getAll(): Observable<ApiResponse<Reference[]>> {
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

  public getSubclasses(index: string): Observable<Reference[]> {
    const url = `${this.getUrl(index)}/${this.subclassesUrl}`;
    return this.getOperations().url(url).fetch();
  }

  public getSpells(index: string): Observable<Reference[]> {
    const url = `${this.getUrl(index)}/${this.spellsUrl}`;
    return this.getOperations().url(url).fetch();
  }

  public getFeatures(index: string): Observable<Reference[]> {
    const url = `${this.getUrl(index)}/${this.featuresUrl}`;
    return this.getOperations().url(url).fetch();
  }

  public getProficiencies(index: string): Observable<Reference[]> {
    const url = `${this.getUrl(index)}/${this.proficienciesUrl}`;
    return this.getOperations().url(url).fetch();
  }

  public levels(): CharacterClassLevelClient {
    return new OperationsCharacterClassLevelClient(this.getOperations);
  }

  private getUrl(index: string) {
    return `${this.classUrl}/${index}`;
  }

}