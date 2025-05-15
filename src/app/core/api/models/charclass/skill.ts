import { Reference } from "../info/reference";

export class Skill {
  index = '';
  name = '';
  url = '';
  desc: string[] = [];
  ability_score = new Reference();
}