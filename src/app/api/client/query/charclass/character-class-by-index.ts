import { ReadOperations } from "@app/api/operations/read-operations";
import { Charclass } from "@app/dnd5/models/charclass/charclass";
import { Multiclassing } from "@app/dnd5/models/charclass/multiclassing";
import { Spellcasting } from "@app/dnd5/models/charclass/spellcasting";
import { Reference } from "@app/dnd5/models/info/reference";
import { Observable } from "rxjs";
import { CharacterClassLevel } from "./character-class-level";

export class CharacterClassByIndex {

  private classUrl = '/classes';

  private spellcastingUrl = '/spellcasting';

  private multiclassingUrl = '/multi-classing';

  private subclassesUrl = '/subclasses';

  private spellsUrl = '/spells';

  private featuresUrl = '/features';

  private proficienciesUrl = '/proficiencies';

  constructor(
    private getOperations: () => ReadOperations,
    private index: string
  ) { }

  public getOne(): Observable<Charclass> {
    const url = this.getUrl();
    return this.getOperations().url(url).fetch();
  }

  public getSpellCasting(): Observable<Spellcasting> {
    const url = `${this.getUrl()}/${this.spellcastingUrl}`;
    return this.getOperations().url(url).fetch();
  }

  public getMultiClassing(): Observable<Multiclassing> {
    const url = `${this.getUrl()}/${this.multiclassingUrl}`;
    return this.getOperations().url(url).fetch();
  }

  public getSubclasses(): Observable<Reference[]> {
    const url = `${this.getUrl()}/${this.subclassesUrl}`;
    return this.getOperations().url(url).fetch();
  }

  public getSpells(): Observable<Reference[]> {
    const url = `${this.getUrl()}/${this.spellsUrl}`;
    return this.getOperations().url(url).fetch();
  }

  public getFeatures(): Observable<Reference[]> {
    const url = `${this.getUrl()}/${this.featuresUrl}`;
    return this.getOperations().url(url).fetch();
  }

  public getProficiencies(): Observable<Reference[]> {
    const url = `${this.getUrl()}/${this.proficienciesUrl}`;
    return this.getOperations().url(url).fetch();
  }

  public levels(): CharacterClassLevel {
    return new CharacterClassLevel(this.getOperations, this.index);
  }

  private getUrl() {
    return `${this.classUrl}/${this.index}`;
  }

}