import { Competence } from "./Competence";
import { User } from "./user";

export class Evaluation{
    id!:number;
    competence!:Competence;
    competenceEmplyee!:User;
}