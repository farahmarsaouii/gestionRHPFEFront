import { TypeFacture } from "./TypeFacture";

export class Facture{
    id!:number;
    nomFacture!:string;
    dateCreation!:Date;
    dateModi!:Date;
    typeFacture!:TypeFacture;

}