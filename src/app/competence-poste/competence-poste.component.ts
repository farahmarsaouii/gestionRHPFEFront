import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Competence } from 'src/models/Competence';
import { AuthenticationService } from 'src/services/authentication-service';
import { CompetenceService } from 'src/services/competence-service';
import { PosteService } from 'src/services/poste-service';

@Component({
  selector: 'app-competence-poste',
  templateUrl: './competence-poste.component.html',
  styleUrls: ['./competence-poste.component.css']
})
export class CompetencePosteComponent implements OnInit {

  constructor(private route:ActivatedRoute,private competenceService:CompetenceService,private posteService:PosteService,
    private authenticationService:AuthenticationService) { }
competences!:Competence[];
public opened =false;
msg!:any;
public o = false;
competence = new Competence;
public d =false;


  ngOnInit(): void { 
     let id = parseInt(this.route.snapshot.paramMap.get('id') || '{}');
  console.log("+++++++++++++++++++++" + id);
  let resp = this.competenceService.getCompetencesPoste(id).subscribe((data) => this.competences = data);
  }


  competenceform = new FormGroup({});
  competenceModel = new Competence();
   //posteModel = this.poste;
   competenceFields: FormlyFieldConfig[] = [
 
     {
       key: 'nomCompetence',
       type: 'input',
       templateOptions: {
         type: 'nomCompetence',
         label: 'Nom competence :',
        placeholder: 'Nom du competence',
         required: true,
       },
       validation: {
         messages: {
           required: 'Competence est obligatoire !'
         }
       },
 
 
     },
     {
       key: 'niveau',
       type: 'input',
       templateOptions: {
         type: 'niveau',
         label: 'Niveau competence :',
         placeholder: 'Niveau competence',
         required: true,
       },
       validation: {
         messages: {
           required: 'Niveau competence est obligatoire !'
         }
       },
     },
     {
      key: 'type',
      type: 'input',
      templateOptions: {
        type: 'type',
        label: 'type competence :',
        placeholder: 'type competence',
        required: true,
      },
      validation: {
        messages: {
          required: 'type competence est obligatoire !'
        }
      },
    },
   ]
 
   public close() {
 this.o=false;
     this.opened = false;
     this.d=false;
 }
   public open() {
     this.opened = true;
 }
 
 ajouter(competence:any){
  let rep = this.authenticationService.findUserByUserName(localStorage.getItem("user") || '{}');
  rep.subscribe((data) => {competence.rh = data
   this.posteService.getPoste(parseInt(this.route.snapshot.paramMap.get('id') || '{}')).subscribe((data)=>{
     competence.poste=data;

     this.competenceService.addCompetence(competence).subscribe((data)=>{
      this.msg=data;
      this.ngOnInit();
      this.opened = false;
     });
   });
  });
  // competence.poste.id=parseInt(this.route.snapshot.paramMap.get('id') || '{}');
    // competence.poste=this.posteService.getPoste(this.route.snapshot.paramMap.get('id') || '{}');
    
   
   
 }
 
 
 Modifiercompetence(competence : Competence){
   this.competence.nomCompetence=competence.nomCompetence;
   this.competence.niveau=competence.niveau;
   this.competence.type=competence.type;
 
 this.competenceService.editCompetence(this.competence).subscribe((data)=>{
   this.msg=data;
   this.ngOnInit();
   this.o = false;
  });
  
 }
 
 delete(){
   this.competenceService.deleteCompetence(this.competence.id).subscribe((data)=>{
     this.msg=data;
     this.ngOnInit();
     this.d=false;
 
    });
   }
 
 
 annuler(){
 this.opened=false;
 }
 openedit(competence:Competence){
 this.o=true;
 this.competence=competence;
 }
 openDelete(competence:any){
   this.competence=competence;
   this.d=true;
 
 
 }

}
