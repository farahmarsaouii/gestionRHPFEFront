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
  plancarriere!:PlanDeCarriere;
  user: User = new User();
  u: User = new User;
  poste!:Poste;
  id:any;
  listeCompetenceparplandecarriere!:Array<Competence>;

  constructor(private planDeCarriereService:PlanDeCarriereService,private authenticationService:AuthenticationService) { }



  ngOnInit(): void {
    let rep = this.authenticationService.findUserByUserName(localStorage.getItem("user") || '{}')
    .subscribe((data) => {
      this.user = data;
      this.getCompetenceParPlanDeCarriereEmployeeParPoste();
    });
    
    
  }

getCompetenceParPlanDeCarriereEmployeeParPoste(){
  
const userId = this.user.id;
 this.planDeCarriereService.getPlanDeCarriereParUser(userId)
 .subscribe((data)=>{
   this.listeCompetenceparplandecarriere=data.competences;
  });
}




}
