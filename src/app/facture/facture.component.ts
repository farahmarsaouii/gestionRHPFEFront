import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Facture } from 'src/models/Facture';
import { AuthenticationService } from 'src/services/authentication-service';
import { FactureService } from 'src/services/facture-service';
import { TypeFactureService } from 'src/services/typeFacture-service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

 

factures!:Facture[];
facture!:Facture;
public opened=false; 
msg!:any;
public o = false;
public d =false;

constructor(private formBuilder: FormBuilder,private authenticationService :AuthenticationService,
  private factureService:FactureService,private typeFactureService:TypeFactureService) { }
ngOnInit(): void {
  let rep = this.factureService.getFactures().subscribe((data) => {
    this.factures = data;
  });
 
}

public close() {
  this.o=false;
      this.opened = false;
      this.d=false;
  }
    public open() {
      this.opened = true;
  }
  annuler(){
    this.opened=false;
    }
    openedit(facture:Facture){
    this.o=true;
    this.facture=facture;
    }
    openDelete(facture:any){
      this.facture=facture;
      this.d=true;
    
    
    }

feedback: any = {};
factureform = new FormGroup({});
factureModel = new Facture();
options: FormlyFormOptions = {};
factureFields: FormlyFieldConfig[] = [
    
    {
    key: 'nomFacture',
    type: 'input',
    templateOptions: {
      type: 'nom',
      label: 'Nom facture ', 
      placeholder: 'Nom facture',
      required: true,
    },
    validation :{
      messages:{
      required :'Nom facture est obligatoire !'
    }
  }
  },
  {
    key: 'typeFacture',
    type: 'select',
    templateOptions: {
      label: 'Type facture :',
      options:this.typeFactureService.getTypeFactures(),
      
      valueProp: 'id',
      labelProp: 'nomTypeFacture',
    },
  },


];
factureBack!:Facture;
 ajouter(facture :any) {
   this.factureBack=facture;
   this.factureBack.dateCreation=new Date();
  this.typeFactureService.getTypeFacture(facture.typeFacture.value).subscribe((data)=>
  {this.factureBack.typeFacture=data;
          this.factureService.addFacture(facture)
          .subscribe((data)=>{
            this.msg=data;
            this.ngOnInit();
            this.opened = false;
           });});

  }

  
  
  updateFacture(facture : any){
    this.typeFactureService.getTypeFacture(facture.typeFacture.value).subscribe((data)=>
  {facture.typeFacture=data;
    facture.dateModi=new Date();
        this.factureService.editFacture(facture).subscribe((data)=>{
         this.msg=data;
         this.ngOnInit();
         this.o = false;
        });
      });

      }
  
  delete(){
    this.factureService.deleteFacture(this.facture.id).subscribe((data)=>{
      this.msg=data;
      this.ngOnInit();
      this.d=false;
  
     });
    }




}
