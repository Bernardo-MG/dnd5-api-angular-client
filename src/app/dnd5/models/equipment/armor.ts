import { Reference } from "../info/reference";
import { Cost } from "./cost";

export class Armor {
  index = '';
  name = '';
  url = '';
  desc: string[] = [];
  equipment_category = new Reference();
  armor_category = '';
  armor_class: any = undefined;
  str_minimum = 0;
  stealth_disadvantage = false;
  cost = new Cost();
  weight = 0;
}