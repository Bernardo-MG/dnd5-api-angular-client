import { Info } from "./info/info";
import { Reference } from "./info/reference";

export class Spellcasting {
    level: number = 0;
    info: Info[] = [];
    spellcasting_ability: Reference = new Reference();
}