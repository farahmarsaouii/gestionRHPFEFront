import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SousCompetence } from "src/models/SousCompetence";


@Injectable()
export class SousCompetenceService {
    private host: string = "http://localhost:8090/";
   constructor(private http: HttpClient) {
    }
    getSousCompetences(): Observable<SousCompetence[]> {
        return this.http.get<SousCompetence[]>(this.host + "sousCompetences");
    }
    getSousCompetence(id:any): Observable<SousCompetence> {
        let params =new HttpParams().set('sousCompetence-id',id)
         return this.http.get<SousCompetence>(this.host+"sousCompetence",{params});
     }
    addSousCompetence(sousCompetence:any){
        return this.http.post(this.host+"add-sousCompetence",sousCompetence); 
    }
    editSousCompetence(sousCompetence:any){
        return this.http.put(this.host+"updateSousCompetence",sousCompetence); 
    }
    deleteSousCompetence(id:any){
        return this.http.delete(this.host+"removeSousCompetence/"+id); 
    }
    getSousCompetenceParCompetenceparUser(idUser:any){
        let params =new HttpParams().set('idUser',idUser)
         return this.http.get(this.host+"getSousCompetenceParCompetenceparUser",{params});
     }
}