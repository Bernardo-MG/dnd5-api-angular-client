import { Reference } from "../info/reference";
import { Cost } from "./cost";

export class Armor {
  index = '';
  name = '';
  url = '';
  desc: string[] = [];
  equipment_category = new Reference();
  gear_category = new Reference();
  cost = new Cost();
  weight = 0;
}