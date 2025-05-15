import { Reference } from "../info/reference";
import { Cost } from "./cost";

export class EquipmentPack {
  index = '';
  name = '';
  url = '';
  desc: string[] = [];
  equipment_category = new Reference();
  gear_category = new Reference();
  cost = new Cost();
  contents: Reference[] = [];
}