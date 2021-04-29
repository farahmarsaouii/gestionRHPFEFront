import { Competence } from "./Competence";
import { Poste } from "./Poste";
import { User } from "./user";

export class PlanDeCarriere{
    id!:number;
    employee!:User;
    poste!:Poste;
    competences!:Array<Competence>;
}