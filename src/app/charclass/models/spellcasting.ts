import { Info } from "./info";
import { Reference } from "./reference";

export class Spellcasting {
    level: number = 0;
    info: Info[] = [];
    spellcasting_ability: Reference = new Reference();
}