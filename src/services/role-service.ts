import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Role } from "src/models/Role";



@Injectable()
export class RoleService {
    private host: string = "http://localhost:8090/";
   constructor(private http: HttpClient) {
    }
    getRoles(): Observable<Role[]> {
        return this.http.get<Role[]>(this.host + "roles");
    }
    getRole(idRole:any): Observable<Role>{
        let params = new HttpParams().set('role-id',idRole);
        return this.http.get<Role>(this.host + "getRoleById",{params});

    }
    addRole(role:any){
        return this.http.post(this.host+"add-role",role); 
    }
    editRole(role:any){
        return this.http.put(this.host+"update-role",role); 
    }
    deleteRole(id:any){
        return this.http.delete(this.host+"removeroles/"+id); 
    }

}