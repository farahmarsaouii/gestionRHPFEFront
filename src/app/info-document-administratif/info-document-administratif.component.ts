import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DemandeDocumentAdministratif } from 'src/models/DemandeDocument';
import { DocumentAdministratif } from 'src/models/DocumentAdministratif';
import { User } from 'src/models/user';
import { AuthenticationService } from 'src/services/authentication-service';
import { DemandeDocumentsService } from 'src/services/demandeDocuments-service';
import { DocumentsService } from 'src/services/documents-service';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-info-document-administratif',
  templateUrl: './info-document-administratif.component.html',
  styleUrls: ['./info-document-administratif.component.css']
})

export class InfoDocumentAdministratifComponent implements OnInit {

  user: User = new User;
  msg!: any;
  demande: DemandeDocumentAdministratif = new DemandeDocumentAdministratif;
  document: DocumentAdministratif = new DocumentAdministratif;
  docDefinition!: TDocumentDefinitions;
  constructor(private route: ActivatedRoute, private docService: DocumentsService, private demandes: DemandeDocumentsService, private userservice: AuthenticationService) { }

  ngOnInit(): void {

    //recuperation id du selected document
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '{}');
    console.log("+++++++++++++++++++++" + id);

    let resp = this.docService.getDocument(id);
    resp.subscribe((data) => this.document = data);

    let rep = this.userservice.findUserByUserName(localStorage.getItem("user") || '{}');
    rep.subscribe((data) => this.user = data);
  }



  saveDemandeDocument() {

    this.demande.documentAdministratif = this.document;
    console.log(this.demande.documentAdministratif);

    this.demande.commenatire = this.docModel.commenatire;
    this.demande.raisonDocument = this.docModel.raisonDocument;
    console.log(this.docModel.raisonDocument);
    console.log(this.docModel.commenatire);
    this.demande.date = new Date();
    this.demande.emplyee = this.user;
    console.log(this.demande.emplyee);
    let resp = this.demandes.addDemandeDocument(this.demande).subscribe((data) => this.msg = data);



  }
  docform = new FormGroup({});
  docModel = new DemandeDocumentAdministratif();
  docFields: FormlyFieldConfig[] = [

    {
      key: 'raisonDocument',
      type: 'input',
      templateOptions: {
        type: 'raisonDocument',
        label: 'Raison document :',
        placeholder: 'raison document',
        required: true,
      },
      validation: {
        messages: {
          required: 'raison obligatoire !'
        }
      },


    },
    {
      key: 'commenatire',
      type: 'input',
      templateOptions: {
        type: 'commentaire',
        label: 'Commentaire :',
        placeholder: 'commentaire',
        required: true,
      },
      validation: {
        messages: {
          required: 'raison obligatoire !'
        }
      },
    },


  ];
   
   generatePDF(b:string) {  
     console.log(b);
   this.docDefinition = {  
      content: [  
        // Previous configuration  
        {  
            text: 'Customer Details',  
            style: [ 'header', 'anotherStyle' ]  
        },
        {text : this.document.contenuDocument},
        {text :this.document.footerDocument},
        {text :this.document.nomDocument},
        {text :this.document.titreDocument},
        {text :this.document.headerDocument},
    ],  
    styles: {  
      header: {
        fontSize: 22,
        bold: true
      },
      anotherStyle: {
        italics: true,
        alignment: 'right'
      }
    }  
  }  ;
   
 
    switch (b) {
      case 'open': pdfMake.createPdf(this.docDefinition).open(); break;
      case 'print': pdfMake.createPdf(this.docDefinition).print(); break;
      case 'download': pdfMake.createPdf(this.docDefinition).download(); break;
      default: pdfMake.createPdf(this.docDefinition).open(); break;
    }
  
  }  
 
  
}
