import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Poste } from 'src/models/Poste';
import { PosteService } from 'src/services/poste-service';

@Component({
  selector: 'app-postes',
  templateUrl: './postes.component.html',
  styleUrls: ['./postes.component.css']
})
export class PostesComponent implements OnInit {

  constructor(private posteService:PosteService,private router:Router) { }
  postes!:Poste[];
  msg!:any;
  public opened = false;
  public o = false;
  poste = new Poste;
  public d =false;


  ngOnInit(): void {
    let rep = this.posteService.getPostes().subscribe((data) => {
      this.postes = data;
    });
    
  }
  competences(poste:Poste){
    this.router.navigate(['/home/competencePoste',poste.id]);

  }
  posteform = new FormGroup({});
 posteModel = new Poste();
  //posteModel = this.poste;
  posteFields: FormlyFieldConfig[] = [

    {
      key: 'nomPoste',
      type: 'input',
      templateOptions: {
        type: 'nomPoste',
        label: 'Nom poste :',
       placeholder: 'Nom du poste',
        required: true,
      },
      validation: {
        messages: {
          required: 'nom du poste est obligatoire !'
        }
      },


    },
    {
      key: 'descriptionPoste',
      type: 'input',
      templateOptions: {
        type: 'descriptionPoste',
        label: 'Description poste :',
        placeholder: 'Desciption du poste',
        required: true,
      },
      validation: {
        messages: {
          required: 'Description du poste est obligatoire !'
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

ajouter(poste:any){
  this.posteService.addPoste(poste).subscribe((data)=>{
    this.msg=data;
    this.ngOnInit();
    this.opened = false;
   });
  
  
}


ModifierPoste(poste : Poste){
  console.log("************"+this.poste.id+"*****************************"+poste.nomPoste);
  this.poste.nomPoste=poste.nomPoste;
  this.poste.descriptionPoste=poste.descriptionPoste;

this.posteService.editPoste(this.poste).subscribe((data)=>{
  this.msg=data;
  this.ngOnInit();
  this.o = false;
 });
 
}

delete(){
  this.posteService.deletePoste(this.poste.id).subscribe((data)=>{
    this.msg=data;
    this.ngOnInit();
    this.d=false;

   });
  }


annuler(){
this.opened=false;
}
openedit(poste:Poste){
this.o=true;
this.poste=poste;
}
openDelete(poste:any){
  this.poste=poste;
  this.d=true;


}
}
