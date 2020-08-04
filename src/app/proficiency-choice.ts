import { Proficiency } from './proficiency';

export interface ProficiencyChoice {
    choose: number;
    type: string;
    from: Proficiency[];
}