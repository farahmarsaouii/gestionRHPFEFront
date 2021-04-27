import { User } from "./user";
import { DocumentAdministratif } from "./DocumentAdministratif";

export class DemandeDocumentAdministratif{
    id!: number;
   date:Date | undefined;
   documentAdministratif!:DocumentAdministratif;
   emplyee!:User;
   raisonDocument!: string;
   commenatire!:string;
}