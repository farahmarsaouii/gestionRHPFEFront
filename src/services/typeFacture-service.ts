import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TypeFacture } from "src/models/TypeFacture";


@Injectable()
export class TypeFactureService {
    private host: string = "http://localhost:8090/";
   constructor(private http: HttpClient) {
    }
    getTypeFactures(): Observable<TypeFacture[]> {
        return this.http.get<TypeFacture[]>(this.host + "typesFactures");
    }
    getTypeFacture(id:any): Observable<TypeFacture> {
        let params =new HttpParams().set('typeFacture-id',id)
         return this.http.get<TypeFacture>(this.host+"typeFacture",{params});
     }
    addTypeFacture(typeFacture:any){
        return this.http.post(this.host+"add-typesFactures",typeFacture); 
    }
    editTypeFacture(typeFacture:any){
        return this.http.put(this.host+"updateTypeFacture",typeFacture); 
    }
    deleteTypeFacture(id:any){
        return this.http.delete(this.host+"removeTypeFacture/"+id); 
    }

}