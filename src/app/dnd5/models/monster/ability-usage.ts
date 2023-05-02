import { SpellUsages } from "../enums/spell-usages";

export class AbilityUsage {
    type = SpellUsages.at_will;
    rest_types: string[] = [];
    times = 0;
}