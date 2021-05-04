import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Competence } from "src/models/Competence";

@Injectable()
export class CompetenceService {
    private host: string = "http://localhost:8090/";
   constructor(private http: HttpClient) {
    }
    getCompetences(): Observable<Competence[]> {
        return this.http.get<Competence[]>(this.host + "competences");
    }
    
    addCompetence(Competence:any){
        return this.http.post(this.host+"add-competence",Competence); 
    }
    editCompetence(Competence:any){
        return this.http.put(this.host+"updateCompetence",Competence); 
    }
    deleteCompetence(id:any){
        return this.http.delete(this.host+"removeCompetence/"+id); 
    }
   
    getCompetencesPoste(idposte:any): Observable<Competence[]> {
        let params =new HttpParams().set('poste-id',idposte)
        return this.http.get<Competence[]>(this.host +"findCompetencesByPoste",{params});
    }


   
}