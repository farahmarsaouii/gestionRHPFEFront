
import { PlanDeCarriere } from "./PlanDeCarriere";
import { Poste } from "./Poste";
import { SousCompetence } from "./SousCompetence";
import { User } from "./user";

export class Competence{
    id!:number;
    type!:string;
    nomCompetence!:string;
    niveau!:string;
    sousCompetences!:Array<SousCompetence>;
    poste!:Poste;
    rh!:User;
    


}