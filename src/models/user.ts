
import { Collection } from "typescript";
import { DemandeDocumentAdministratif } from "./DemandeDocument";
import { DocumentAdministratif } from "./DocumentAdministratif";
import { Equipe } from "./Equipe";
import { PlanDeCarriere } from "./PlanDeCarriere";
import { Role } from "./Role";

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
    equipe!:Equipe;
    role!:Role;


/*constructor(id:number,userName:string,password:string,email:string,cin:string)

{
    this.id=id;
    this.userName=userName;
    this.password=password;
    this.email=email;
    this.cin=cin;
}*/
}