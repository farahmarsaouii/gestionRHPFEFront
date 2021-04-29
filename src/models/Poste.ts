import { PlanDeCarriere } from "./PlanDeCarriere";
import { User } from "./user";

export class Poste{
    id!:number;
    nomPoste!:string;
    planDeCarriere!:Array<PlanDeCarriere>;
}