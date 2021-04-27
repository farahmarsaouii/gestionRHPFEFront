import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Facture } from "src/models/Facture";


@Injectable()
export class FactureService {
    private host: string = "http://localhost:8090/";
   constructor(private http: HttpClient) {
    }
    getFactures(): Observable<Facture[]> {
        return this.http.get<Facture[]>(this.host + "factures");
    }
    getFacture(id:any): Observable<Facture> {
        let params =new HttpParams().set('facture-id',id)
         return this.http.get<Facture>(this.host+"facture",{params});
     }
    addFacture(facture:any){
        return this.http.post(this.host+"add-facture",facture); 
    }
    editFacture(facture:any){
        return this.http.put(this.host+"updateFacture",facture); 
    }
    deleteFacture(id:any){
        return this.http.delete(this.host+"removeFactures/"+id); 
    }

}