import { Rarity } from "./rarity";
import { Reference } from "./info/reference";

export class MagicItem {
    index: string = '';
    name: string = '';
    url: string = '';
    desc: string[] = [];
    equipment_category: Reference = new Reference();
    rarity: Rarity = new Rarity();
    variants: Reference[] = [];
    variant: boolean = false;
}