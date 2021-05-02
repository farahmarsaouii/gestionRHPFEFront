import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { Equipe } from 'src/models/Equipe';
import { AuthenticationService } from 'src/services/authentication-service';
import { Role } from 'src/models/Role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipe-manager',
  templateUrl: './equipe-manager.component.html',
  styleUrls: ['./equipe-manager.component.css']
})
export class EquipeManagerComponent implements OnInit {
  connectedUser!:User;
  users!:User[];
  equipe!:Equipe;
  feedback: any = {};
  constructor(private authenticationService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
   /* let rep = this.authenticationService.findUserByUserName(localStorage.getItem("user") || '{}');
    rep.subscribe((data) => {
      this.connectedUser = data;
      console.log(this.connectedUser);
      console.log(this.connectedUser.equipe);
    this.equipe=this.connectedUser.equipe;
    
    this.authenticationService.findUsersByEquipeAndRole(this.equipe.id).subscribe((data) => this.users = data);
   }); }*/
  
     let rep = this.authenticationService.findUserByUserName(localStorage.getItem("user") || '{}');
    rep.toPromise().then((data) => {
      this.connectedUser = data;
      console.log(this.connectedUser);
      console.log(this.connectedUser.equipe);
    this.equipe=this.connectedUser.equipe;
    
    this.authenticationService.findUsersByEquipeAndRole(this.equipe.id).subscribe((data) => this.users = data);
   }); }
   onSelect(user:User){
    this.router.navigate(['/home/planDeCarriereUser',user.id]);
      }
}
