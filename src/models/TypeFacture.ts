import { Facture } from "./Facture";

export class TypeFacture{
  id!:number;
  nomTypeFacture!:string;
  factures!: Array<Facture>;
}