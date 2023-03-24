import { ReadOperations } from "@app/dnd5/api/operations/read-operations";
import { Feature } from "@app/dnd5/models/charclass/feature";
import { Level } from "@app/dnd5/models/charclass/level";
import { Spell } from "@app/dnd5/models/charclass/spell";
import { Observable } from "rxjs";

export class CharacterClassQueryLevelByNumber {

  private featureRoute = '/features';

  private spellRoute = '/spells';

  constructor(
    private operations: ReadOperations
  ) { }

  public getOne(): Observable<Level> {
    return this.operations.fetch();
  }

  public getFeatures(): Observable<Feature> {
    return this.operations.appendRoute(this.featureRoute).fetch();
  }

  public getSpells(): Observable<Spell> {
    return this.operations.appendRoute(this.spellRoute).fetch();
  }

}