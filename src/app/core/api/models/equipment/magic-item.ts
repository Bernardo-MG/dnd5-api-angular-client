import { Reference } from "../info/reference";
import { Rarity } from "./rarity";

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