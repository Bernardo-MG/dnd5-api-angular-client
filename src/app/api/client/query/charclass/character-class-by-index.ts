import { ReadOperations } from "@app/api/operations/read-operations";
import { Charclass } from "@app/dnd5/models/charclass/charclass";
import { Multiclassing } from "@app/dnd5/models/charclass/multiclassing";
import { Spellcasting } from "@app/dnd5/models/charclass/spellcasting";
import { Reference } from "@app/dnd5/models/info/reference";
import { Observable } from "rxjs";
import { CharacterClassLevel } from "./character-class-level";

export class CharacterClassDetails {

  private spellcastingRoute = '/spellcasting';

  private multiclassingRoute = '/multi-classing';

  private subclassesRoute = '/subclasses';

  private spellsRoute = '/spells';

  private featuresRoute = '/features';

  private proficienciesRoute = '/proficiencies';

  constructor(
    private operations: ReadOperations
  ) {  }

  public getOne(): Observable<Charclass> {
    return this.operations.fetch();
  }

  public getSpellCasting(): Observable<Spellcasting> {
    this.operations.appendRoute(this.spellcastingRoute);
    return this.operations.fetch();
  }

  public getMultiClassing(): Observable<Multiclassing> {
    this.operations.appendRoute(this.multiclassingRoute);
    return this.operations.fetch();
  }

  public getSubclasses(): Observable<Reference[]> {
    this.operations.appendRoute(this.subclassesRoute);
    return this.operations.fetch();
  }

  public getSpells(): Observable<Reference[]> {
    this.operations.appendRoute(this.spellsRoute);
    return this.operations.fetch();
  }

  public getFeatures(): Observable<Reference[]> {
    this.operations.appendRoute(this.featuresRoute);
    return this.operations.fetch();
  }

  public getProficiencies(): Observable<Reference[]> {
    this.operations.appendRoute(this.proficienciesRoute);
    return this.operations.fetch();
  }

  public levels(): CharacterClassLevel {
    return new CharacterClassLevel(this.operations);
  }

}