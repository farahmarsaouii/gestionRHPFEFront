import { Injectable } from "@angular/core";
//import "rxjs/Rx" ;

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from "src/models/user";

import { Observable } from "rxjs";

@Injectable()
export class AuthenticationService {
    private host: string = "http://localhost:8090/";
    private jwtToken: string | null = null;
    private roleUser: string | null = null;
    private privileges: Array<any> = [];
    
   
    jwt: string = "";
    username: string = "";
    user!:User;
    //    role:any ="";

    constructor(private http: HttpClient) {
    }

    login(user: any) {
        return this.http.post(this.host + "login", user, { observe: 'response' });
    }

    register(user: User) {
        return this.http.post(this.host + "register",user, { observe: 'response' });
    }
    saveToken(jwt: string) {
        this.jwtToken = jwt;
        localStorage.setItem("tokenUser", this.jwtToken);
        let jwtHelper = new JwtHelperService();
        this.username= jwtHelper.decodeToken(this.jwtToken).sub;
        localStorage.setItem('user', jwtHelper.decodeToken(this.jwtToken).sub);
      
       
        // localStorage.setItem('privilege', jwtHelper.decodeToken(this.jwtToken).privileges);
      //  this.privileges = jwtHelper.decodeToken(this.jwtToken).privileges[1]['authority'];
        //this.privileges = jwtHelper.decodeToken(this.jwtToken).privileges[0]['authority'];
        //console.log("=============== "+this.privileges);
        //localStorage.setItem('**** collection ',jwtHelper.decodeToken(this.jwtToken).privileges);
     }
    

    getTasks() {
        if (this.jwtToken == null)
            this.loadToken();
            let headers =new HttpHeaders().set('Authorization' , localStorage.getItem('tokenUser') || []); 
        return this.http.get(this.host + "tasks", {headers});
    }


   /* httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('tokenUser') || []
         
        }),
        
    };*/
    
   // saveTask(task: any) {
    //    let headers =new HttpHeaders().set('Authorization' , localStorage.getItem('tokenUser') || []);
   //     return this.http.post(this.host + "tasks", task, {headers});
  //  }
    findUserByUserName(usernameu:string): Observable<User>{
        let headers =new HttpHeaders().set('Authorization' , localStorage.getItem('tokenUser') || []);
        return this.http.get<User>(this.host + "userbyUsername/"+usernameu,{headers});
    }
  

    loadToken() {
        this.jwtToken = localStorage.getItem('tokenUser');
        return this.jwtToken;
    }
    logout() {
        localStorage.removeItem('tokenUser');
    }

    /*     isAdmin(){ 
             for(let r of this.roleUser){
                  if(r.authority=='ADMIN')
                   return true;
                  } return false; }
      isUser(){ 
                     for(let r of this.role){
                          if(r.authority=='USER')
                           return true;
                          } return false; } 
                         
                         */

    isAdmin() {
        for (let p of this.privileges) {
            if (p.authority == 'accessToData')
                return true;
        } return false;
    }
    isUser() {
        for (let p of this.privileges) {
            if (p.authority == 'accessToData')
                return true;
        } return false;
    }

   

}