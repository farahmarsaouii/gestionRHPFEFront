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


@Component({
  selector: 'app-info-document-administratif',
  templateUrl: './info-document-administratif.component.html',
  styleUrls: ['./info-document-administratif.component.css']
})

export class InfoDocumentAdministratifComponent implements OnInit {
  public opened = false;
  user: User = new User;
  msg!: any;
  demande: DemandeDocumentAdministratif = new DemandeDocumentAdministratif;
  document: DocumentAdministratif = new DocumentAdministratif;
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

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

}
