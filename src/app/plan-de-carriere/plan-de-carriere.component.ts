import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { List } from 'gojs';
import { Competence } from 'src/models/Competence';
import { PlanDeCarriere } from 'src/models/PlanDeCarriere';
import { Poste } from 'src/models/Poste';
import { SousCompetence } from 'src/models/SousCompetence';
import { User } from 'src/models/user';
import { AuthenticationService } from 'src/services/authentication-service';
import { CompetenceService } from 'src/services/competence-service';
import { PlanDeCarriereService } from 'src/services/planDeCarriere-service';
import { SousCompetenceService } from 'src/services/sousCompetence-service';


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
  reponse:any;
  map:any;
  souscompetences:any;
 

  constructor(private competenceService:CompetenceService,private sousCompetenceService:SousCompetenceService,private authenticationService:AuthenticationService) { }



  ngOnInit(): void {
   this.authenticationService.findUserByUserName(localStorage.getItem("user") || '{}')
    .subscribe((data) => {
  
    // this.sousCompetenceService.getSousCompetenceParCompetenceparUser(data.id).subscribe((data) => {
    //  this.map=data;
    this.competenceService.getCompetencesParPostParuser(data.id).subscribe((data)=> {
      this.map=data
   
    });
    this.sousCompetenceService.getsousCompetencesparUser(data.id).subscribe((data)=>
    this.souscompetences=data)

    });

  
    
  }
    

  




}
