import { Rarity } from "./rarity";
import { Reference } from "../info/reference";

export class MagicItem {
    index = '';
    name = '';
    url = '';
    desc: string[] = [];
    equipment_category = new Reference();
    rarity = new Rarity();
    variants: Reference[] = [];
    variant = false;
}