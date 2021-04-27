import { Injectable } from "@angular/core";
//import "rxjs/Rx" ;

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { DocumentAdministratif } from "src/models/DocumentAdministratif";
import { Observable } from "rxjs";

@Injectable()
export class DocumentsService {
    private host: string = "http://localhost:8090/";
   constructor(private http: HttpClient) {
    }
    getDocuments(): Observable<DocumentAdministratif[]> {
        return this.http.get<DocumentAdministratif[]>(this.host + "documents");
    }
    getDocument(id:any): Observable<DocumentAdministratif> {
       let params =new HttpParams().set('id',id)
        return this.http.get<DocumentAdministratif>(this.host+"document",{params});
    }
    addDocument(documentadministratif:any){
        return this.http.post(this.host+"add-document",documentadministratif); 
    }
    editDocument(documentadministratif:any){
        return this.http.put(this.host+"updateDocument",documentadministratif); 
    }
    deleteDocument(id:any){
        return this.http.delete(this.host+"removedocument/"+id); 
    }

}