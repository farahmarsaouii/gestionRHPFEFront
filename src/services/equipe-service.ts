import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Equipe } from "src/models/Equipe";



@Injectable()
export class EquipeService {
    private host: string = "http://localhost:8090/";
   constructor(private http: HttpClient) {
    }
    getEquipes(): Observable<Equipe[]> {
        return this.http.get<Equipe[]>(this.host + "equipes");
    }
  

}