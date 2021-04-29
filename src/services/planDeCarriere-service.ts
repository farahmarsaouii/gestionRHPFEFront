import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PlanDeCarriere } from "src/models/PlanDeCarriere";
import { Poste } from "src/models/Poste";


@Injectable()
export class PlanDeCarriereService {
    private host: string = "http://localhost:8090/";
   constructor(private http: HttpClient) {
    }
    getPlanDeCarrieres(): Observable<PlanDeCarriere[]> {
        return this.http.get<PlanDeCarriere[]>(this.host + "planDeCarrieres");
    }
    getPlanDeCarriere(id:any): Observable<PlanDeCarriere> {
        let params =new HttpParams().set('planDeCarriere-id',id)
         return this.http.get<PlanDeCarriere>(this.host+"planDeCarriere",{params});
     }
    addPlanDeCarriere(planDeCarriere:any){
        return this.http.post(this.host+"add-planDeCarriere",planDeCarriere); 
    }
    editPlanDeCarriere(planDeCarriere:any){
        return this.http.put(this.host+"updatePlanDeCarriere",planDeCarriere); 
    }
    deletePlanDeCarriere(id:any){
        return this.http.delete(this.host+"removePlanDeCarriere/"+id); 
    }
  getPlanDeCarriereParPoste(idposte:any): Observable<PlanDeCarriere>{
    let params =new HttpParams().set('idPoste',idposte)
    return this.http.get<PlanDeCarriere>(this.host+"planDeCarrieresParPoste",{params});
  }
  getPosteparUser(idUser:any): Observable<PlanDeCarriere>{
    let params =new HttpParams().set('idUser',idUser)
    return this.http.get<PlanDeCarriere>(this.host+"planDeCarrieresParUser",{params});   
  }

}