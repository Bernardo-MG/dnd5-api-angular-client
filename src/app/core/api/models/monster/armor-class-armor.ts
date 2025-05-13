import { ArmorTypes } from "../enums/armor-types";
import { Reference } from "../info/reference";

export class ArmorClassArmor {
  type = ArmorTypes.armor;
  value = 0;
  armor: Reference[] = [];
  desc = '';
}