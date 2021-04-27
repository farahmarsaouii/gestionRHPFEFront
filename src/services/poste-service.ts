import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Poste } from "src/models/Poste";


@Injectable()
export class PosteService {
    private host: string = "http://localhost:8090/";
   constructor(private http: HttpClient) {
    }
    getPostes(): Observable<Poste[]> {
        return this.http.get<Poste[]>(this.host + "postes");
    }
    getPoste(id:any): Observable<Poste> {
        let params =new HttpParams().set('poste-id',id)
         return this.http.get<Poste>(this.host+"poste",{params});
     }
    addPoste(poste:any){
        return this.http.post(this.host+"add-poste",poste); 
    }
    editPoste(poste:any){
        return this.http.put(this.host+"updatePoste",poste); 
    }
    deletePoste(id:any){
        return this.http.delete(this.host+"removePoste/"+id); 
    }

}