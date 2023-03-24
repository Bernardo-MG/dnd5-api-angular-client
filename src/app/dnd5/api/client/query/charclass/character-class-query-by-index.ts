import { ReadOperations } from "@app/dnd5/api/operations/read-operations";
import { Charclass } from "@app/dnd5/models/charclass/charclass";
import { Multiclassing } from "@app/dnd5/models/charclass/multiclassing";
import { Spellcasting } from "@app/dnd5/models/charclass/spellcasting";
import { Reference } from "@app/dnd5/models/info/reference";
import { Observable } from "rxjs";
import { CharacterClassQueryLevel } from "./character-class-query-level";

export class CharacterClassQueryByIndex {

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
    return this.operations.appendRoute(this.spellcastingRoute).fetch();
  }

  public getMultiClassing(): Observable<Multiclassing> {
    return this.operations.appendRoute(this.multiclassingRoute).fetch();
  }

  public getSubclasses(): Observable<Reference[]> {
    return this.operations.appendRoute(this.subclassesRoute).fetch();
  }

  public getSpells(): Observable<Reference[]> {
    return this.operations.appendRoute(this.spellsRoute).fetch();
  }

  public getFeatures(): Observable<Reference[]> {
    return this.operations.appendRoute(this.featuresRoute).fetch();
  }

  public getProficiencies(): Observable<Reference[]> {
    return this.operations.appendRoute(this.proficienciesRoute).fetch();
  }

  public levels(): CharacterClassQueryLevel {
    return new CharacterClassQueryLevel(this.operations);
  }

}