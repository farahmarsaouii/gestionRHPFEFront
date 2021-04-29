
import { DemandeDocumentAdministratif } from "./DemandeDocument";
import { DocumentAdministratif } from "./DocumentAdministratif";
import { PlanDeCarriere } from "./PlanDeCarriere";

export class User{
    id!: number;
    userName!:string;
    password!:string;
    email:string | undefined;
    cin!:string;
    photo:string | undefined;
    repassword!:string;
    planDeCarriere:Array<PlanDeCarriere> | undefined;
    demandeDocument:Array<DemandeDocumentAdministratif> | undefined;
    documentAdministratif:Array<DocumentAdministratif> | undefined;


/*constructor(id:number,userName:string,password:string,email:string,cin:string)

{
    this.id=id;
    this.userName=userName;
    this.password=password;
    this.email=email;
    this.cin=cin;
}*/
}