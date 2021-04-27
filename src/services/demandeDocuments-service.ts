import { Injectable } from "@angular/core";
//import "rxjs/Rx" ;

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { DocumentAdministratif } from "src/models/DocumentAdministratif";
import { Observable } from "rxjs";
import { DemandeDocumentAdministratif } from "src/models/DemandeDocument";
import { AuthenticationService } from "./authentication-service";

@Injectable()
export class DemandeDocumentsService {
    private host: string = "http://localhost:8090/";
    private jwtToken: string | null = null;
    private roleUser: string | null = null;
    private privileges: Array<any> = [];
    demandeDocument!: DemandeDocumentAdministratif;
   
    jwt: string = "";
    username: string | null | undefined;
    user:any;
    //    role:any ="";

    constructor(private http: HttpClient) {
    }


    getDemandeDocuments(): Observable<DemandeDocumentAdministratif[]> {
        let params =new HttpParams().set('username',localStorage.getItem('user')|| "");
        console.log(params);
        let headers =new HttpHeaders().set('Authorization' , localStorage.getItem('tokenUser') || []);
        return this.http.get<DemandeDocumentAdministratif[]>(this.host + "demandeDocumentsbyuser",{headers,params});
    }
    addDemandeDocument(demandeDocument :DemandeDocumentAdministratif){

   
  console.log("je suis  en add methode"+demandeDocument.commenatire+"  "+demandeDocument.raisonDocument);
        let headers =new HttpHeaders().set('Authorization' , localStorage.getItem('tokenUser') || []);
        return this.http.post(this.host+"add-demandeDocument",demandeDocument);
    }
    

}