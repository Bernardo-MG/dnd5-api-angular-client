import { ItemRarity } from "./item-rarity";
import { Reference } from "./reference";

export class MagicItem {
    index: string = '';
    name: string = '';
    url: string = '';
    equipment_category: Reference = new Reference();
    rarity: ItemRarity = ItemRarity.Common;
    variants: Reference[] = [];
    variant: boolean = false;
}