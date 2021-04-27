import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DocumentAdministratif } from 'src/models/DocumentAdministratif';
import { AuthenticationService } from 'src/services/authentication-service';
import { DocumentsService } from 'src/services/documents-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-document-administratif',
  templateUrl: './document-administratif.component.html',
  styleUrls: ['./document-administratif.component.css']
})
export class DocumentAdministratifComponent implements OnInit {

  constructor(private docService:DocumentsService, private router : Router) { }
  document: DocumentAdministratif[] = [];

  feedback: any = {};
  resp : any;
  public opened = false;



  ngOnInit(): void {
    let resp=this.docService.getDocuments();
    resp.subscribe((data)=>this.document=data);
    console.log(resp);
  }
 /* getDocuments(){
    
    this.authService.getDocuments().subscribe(doc => {
                this.document = doc;
                this.feedback = {};
                console.log(this.document);
              },
              err => {
                this.feedback = {type: 'warning', message: 'Error loading'};
              }
            );
            


  }*/
 

docform = new FormGroup({});
docModel = new DocumentAdministratif();
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
    validation :{
      messages:{
      required :'raison obligatoire !'
    }
  },
  
  
  },
  {
    key: 'commentaire',
    type: 'textarea',
    templateOptions: {
      type: 'commentaire',
      label: 'Commentaire :',
      placeholder: 'commentaire',
      required: true,
    },
  
  },
 

];

    public close() {
        this.opened = false;
    }

    public open() {
        this.opened = true;
    }

    onSelect(doc:DocumentAdministratif){
      this.router.navigate(['/home/infoDocumentAdministratif',doc.id]);
        }
}