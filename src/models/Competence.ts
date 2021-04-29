
import { PlanDeCarriere } from "./PlanDeCarriere";
import { SousCompetence } from "./SousCompetence";

export class Competence{
    id!:number;
    type!:string;
    nomCompetence!:string;
    evaluation!: Boolean;
    niveau!:string;
    sousCompetences!:Array<SousCompetence>;
    planDeCarriere !:PlanDeCarriere;


}