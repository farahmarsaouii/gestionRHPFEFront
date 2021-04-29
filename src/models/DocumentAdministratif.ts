import { DemandeDocumentAdministratif } from "./DemandeDocument";
import { User } from "./user";

export class DocumentAdministratif{
    id!: number;
    nomDocument!:string;
    type!: string;
    dateCreation!: Date;
    dateModf!: Date;
   
    titreDocument!: string;
    contenuDocument!: string;
    headerDocument!: string;
    footerDocument!: string;
    demandeDocument!:DemandeDocumentAdministratif;
    drh!:User;

}