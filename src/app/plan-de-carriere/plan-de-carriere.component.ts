import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Competence } from 'src/models/Competence';
import { PlanDeCarriere } from 'src/models/PlanDeCarriere';
import { Poste } from 'src/models/Poste';
import { User } from 'src/models/user';
import { AuthenticationService } from 'src/services/authentication-service';
import { PlanDeCarriereService } from 'src/services/planDeCarriere-service';


@Component({
  selector: 'app-plan-de-carriere',
  templateUrl: './plan-de-carriere.component.html',
  styleUrls: ['./plan-de-carriere.component.css']
})
export class PlanDeCarriereComponent implements OnInit {

  constructor(private planDeCarriereService:PlanDeCarriereService,private authenticationService:AuthenticationService) { }
plancarriere!:PlanDeCarriere;
user!: User;
poste!:Poste;
listeCompetenceparplandecarriere!:Array<Competence>;
  ngOnInit(): void {
    let rep=this.authenticationService.findUserByUserName(localStorage.getItem("user")|| '{}');
    rep.subscribe((data)=>this.user=data);

   
  }
getCompetenceParPlanDeCarriereEmployeeParPoste(){
  //id current user
  let jwtHelper = new JwtHelperService();

 // this.user =this.authenticationService.findUserByUserName( jwtHelper.decodeToken(localStorage.getItem('tokenUser') || []).sub);
 let respo=this.planDeCarriereService.getPosteparUser(this.user.id);
 respo.subscribe((data)=>this.plancarriere=data);

  let resp=this.planDeCarriereService.getPlanDeCarriereParPoste(this.plancarriere.poste.id);
  resp.subscribe((data)=>this.plancarriere=data);
  this.listeCompetenceparplandecarriere=this.plancarriere.competences;
}
}
