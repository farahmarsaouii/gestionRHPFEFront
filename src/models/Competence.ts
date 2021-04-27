import { Evaluation } from "./Evaluation";
import { PlanDeCarriere } from "./PlanDeCarriere";
import { SousCompetence } from "./SousCompetence";

export class Competence{
    id!:number;
    type!:string;
    nomCompetence!:string;
    evaluation!: Array<Evaluation>;
    sousCompetences!:Array<SousCompetence>;
    planDeCarriere !:PlanDeCarriere;


}