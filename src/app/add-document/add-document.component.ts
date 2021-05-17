import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DocumentAdministratif } from 'src/models/DocumentAdministratif';
import { User } from 'src/models/user';
import { AuthenticationService } from 'src/services/authentication-service';
import { DocumentsService } from 'src/services/documents-service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {
rh=new User();
  constructor(private DocumentsService:DocumentsService,private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.findUserByUserName(localStorage.getItem("user") || '{}')
    .subscribe((data) => {this.rh=data;})
  }
  feedback: any = {};
  docform = new FormGroup({});
  docModel = new DocumentAdministratif();
    docFields: FormlyFieldConfig[] = [
      {
      key: 'nomDocument',
      type: 'input',
      templateOptions: {
        type: 'nomDocument',
        label: 'nomDocument',
        placeholder: 'Nom Document',
        required: true,
      },
      validation :{
        messages:{
        required :'nom Documentobligatoire !'
      }
    }
    },
    {
      key: 'type',
      type: 'input',
      templateOptions: {
        type: 'type',
        label: 'Type Document :',
        placeholder: 'Type Document',
        required: true,
      },
      validation : {
        messages: {
        required :'type Document est obligatoire !' } }
    },
  
    {
      key: 'titreDocument',
      type: 'input',
      templateOptions: {
        type: 'titreDocument',
        label: 'Titre Document :',
        placeholder: 'Titre Document',
        required: true,
      },
      validation : {
        messages: {
        required :'titre Document est obligatoire !' } }
    },
    {
      key: 'contenuDocument',
      type: 'input',
      templateOptions: {
        type: 'contenuDocument',
        label: 'Contenu Document',
        placeholder: 'Contenu Document',
        required: true,
      },
      validation :{
        messages:{
        required :'Contenu Document obligatoire !'
      }
    },
    
    
    },
    {
      key: 'headerDocument',
      type: 'input',
      templateOptions: {
        type: 'headerDocument',
        label: 'header Document :',
        placeholder: 'header Document',
        required: true,
      },
      validation : {
        messages: {
        required :'headerDocument est obligatoire !' } }
    },
    {
      key: 'footerDocument',
      type: 'input',
      templateOptions: {
        type: 'footerDocument',
        label: 'footerDocument :',
        placeholder: 'footerDocument',
        required: true,
      },
      validation : {
        messages: {
        required :'footerDocument est obligatoire !' } }
    }
  
  ];
   
    register(doc :DocumentAdministratif) {
      console.log(this.rh);
      doc.drh=this.rh;
     doc.dateCreation=new Date();
            this.DocumentsService.addDocument(doc)
            .subscribe(resp=>{
  
              this.feedback = {type: 'success', message: 'successful!'};
  alert("document ajouter");
            },err=>{
              this.feedback = {type: 'warning', message: 'Error deleting.'};
            })

    }
}
