import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Evaluation } from "src/models/Evaluation";

@Injectable()
export class EvaluationService {
    private host: string = "http://localhost:8090/";
   constructor(private http: HttpClient) {
    }
    getEvaluations(): Observable<Evaluation[]> {
        return this.http.get<Evaluation[]>(this.host + "evaluations");
    }
    getEvaluation(id:any): Observable<Evaluation> {
        let params =new HttpParams().set('evaluation-id',id)
         return this.http.get<Evaluation>(this.host+"evaluation",{params});
     }
    addEvaluation(evaluation:any){
        return this.http.post(this.host+"add-evaluation",evaluation); 
    }
    editEvaluation(evaluation:any){
        return this.http.put(this.host+"updateEvaluation",evaluation); 
    }
    deleteEvaluation(id:any){
        return this.http.delete(this.host+"removeEvaluation/"+id); 
    }

}