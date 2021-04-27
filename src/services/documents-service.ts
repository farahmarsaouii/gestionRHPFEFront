import { Injectable } from "@angular/core";
//import "rxjs/Rx" ;

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { DocumentAdministratif } from "src/models/DocumentAdministratif";
import { Observable } from "rxjs";

@Injectable()
export class DocumentsService {
    private host: string = "http://localhost:8090/";
    private jwtToken: string | null = null;
    private roleUser: string | null = null;
    private privileges: Array<any> = [];
    
   
    jwt: string = "";
    username: string = "";
    //    role:any ="";

    constructor(private http: HttpClient) {
    }


    getDocuments(): Observable<DocumentAdministratif[]> {
        let headers =new HttpHeaders().set('Authorization' , localStorage.getItem('tokenUser') || []);
        return this.http.get<DocumentAdministratif[]>(this.host + "documents",{headers});
    }
    getDocument(id:any): Observable<DocumentAdministratif> {
       let params =new HttpParams().set('id',id)
        let headers =new HttpHeaders().set('Authorization' , localStorage.getItem('tokenUser') || []);
        return this.http.get<DocumentAdministratif>(this.host+"document",{headers,params});
    }
    addDocument(documentadministratif:any){
        return this.http.post(this.host+"add-document",documentadministratif); 
    }
    deleteDocument(id:any){
        return this.http.delete(this.host+"serve/"+id); 
    }

}