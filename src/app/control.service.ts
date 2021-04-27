import { Injectable } from '@angular/core';
import {Router,CanActivate} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor(private router:Router) { }

 /* canActivate(){
    var jwtToken=localStorage.getItem('tokenUser');
    if(!jwtToken){
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;      
  }*/
}
