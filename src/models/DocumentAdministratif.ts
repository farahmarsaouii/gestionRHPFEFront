import { DemandeDocumentAdministratif } from "./DemandeDocument";
import { User } from "./user";

export class DocumentAdministratif{
    id!: number;
    nomDocument!:string;
    type: string | undefined;
    dateCreation!: Date;
    dateModf!: Date;
   
    titreDocument: string | undefined;
    contenuDocument: string | undefined;
    headerDocument: string | undefined;
    footerDocument: string | undefined;
    demandeDocument!:DemandeDocumentAdministratif;
    drh!:User;

}