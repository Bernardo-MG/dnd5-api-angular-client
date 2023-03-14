import { ReadOperations } from "@app/api/operations/read-operations";
import { Charclass } from "@app/dnd5/models/charclass/charclass";
import { Multiclassing } from "@app/dnd5/models/charclass/multiclassing";
import { Spellcasting } from "@app/dnd5/models/charclass/spellcasting";
import { Reference } from "@app/dnd5/models/info/reference";
import { Observable } from "rxjs";
import { CharacterClassLevel } from "./character-class-level";

export class CharacterClassByIndex {

  private rootRoute: string;

  private spellcastingRoute = '/spellcasting';

  private multiclassingRoute = '/multi-classing';

  private subclassesRoute = '/subclasses';

  private spellsRoute = '/spells';

  private featuresRoute = '/features';

  private proficienciesRoute = '/proficiencies';

  constructor(
    private getOperations: () => ReadOperations,
    route: string,
    index: string
  ) {
    this.rootRoute = `${route}/${index}`;
  }

  public getOne(): Observable<Charclass> {
    const route = this.rootRoute;
    return this.getOperations().route(route).fetch();
  }

  public getSpellCasting(): Observable<Spellcasting> {
    const route = this.getRoute(this.spellcastingRoute);
    return this.getOperations().route(route).fetch();
  }

  public getMultiClassing(): Observable<Multiclassing> {
    const route = this.getRoute(this.multiclassingRoute);
    return this.getOperations().route(route).fetch();
  }

  public getSubclasses(): Observable<Reference[]> {
    const route = this.getRoute(this.subclassesRoute);
    return this.getOperations().route(route).fetch();
  }

  public getSpells(): Observable<Reference[]> {
    const route = this.getRoute(this.spellsRoute);
    return this.getOperations().route(route).fetch();
  }

  public getFeatures(): Observable<Reference[]> {
    const route = this.getRoute(this.featuresRoute);
    return this.getOperations().route(route).fetch();
  }

  public getProficiencies(): Observable<Reference[]> {
    const route = this.getRoute(this.proficienciesRoute);
    return this.getOperations().route(route).fetch();
  }

  public levels(): CharacterClassLevel {
    return new CharacterClassLevel(this.getOperations, this.rootRoute);
  }

  private getRoute(route: string) {
    return `${this.rootRoute}/${route}`;
  }

}