import { SpellUsages } from "./enums/spell-usages";

export class AbilityUsage {
    type: SpellUsages = SpellUsages.at_will;
    rest_types: string[] = [];
    times: number = 0;
}