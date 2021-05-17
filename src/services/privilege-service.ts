import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Privilege } from "src/models/Privilege";
import { Role } from "src/models/Role";



@Injectable()
export class PrivilegeService {
    private host: string = "http://localhost:8090/";
   constructor(private http: HttpClient) {
    }
    getPrivileges(): Observable<Privilege[]> {
        return this.http.get<Privilege[]>(this.host + "Privileges");
    }
    getPrivilegeByName(privilegeName:any): Observable<Privilege> {
        let params =new HttpParams().set('privilege-name',privilegeName)
         return this.http.get<Privilege>(this.host+"PrivilegeByName",{params});
     }

     getPrivilegeByNames(names:string[]): Observable<any[]> {
 
         return this.http.get<any[]>(this.host+"PrivilegeByNames/"+names);
     }

    getRole(id:any): Observable<Role> {
        let params =new HttpParams().set('role-id',id)
         return this.http.get<Role>(this.host+"role",{params});
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