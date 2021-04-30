
import { Collection } from "typescript";
import { DemandeDocumentAdministratif } from "./DemandeDocument";
import { DocumentAdministratif } from "./DocumentAdministratif";
import { PlanDeCarriere } from "./PlanDeCarriere";

export class User{
    id!: number;
    userName!:string;
    password!:string;
    email!:string;
    cin!:string;
    photo!:string;
    repassword!:string;
    planDeCarriere!:Collection<PlanDeCarriere>;
    demandeDocument!:Collection<DemandeDocumentAdministratif>;
    documentAdministratif!:Collection<DocumentAdministratif>;


/*constructor(id:number,userName:string,password:string,email:string,cin:string)

{
    this.id=id;
    this.userName=userName;
    this.password=password;
    this.email=email;
    this.cin=cin;
}*/
}