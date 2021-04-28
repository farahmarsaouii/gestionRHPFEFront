import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DocumentAdministratif } from 'src/models/DocumentAdministratif';

import { DocumentsService } from 'src/services/documents-service';
@Component({
  selector: 'app-liste-documents',
  templateUrl: './liste-documents.component.html',
  styleUrls: ['./liste-documents.component.css']
})
export class ListeDocumentsComponent implements OnInit {
  document!:DocumentAdministratif[];
  msg!:any;
  doc!:DocumentAdministratif;
  public opened = false;
  public op =false;
  public actionsLayout = 'normal';
  constructor(private documentService:DocumentsService,public router: Router) { }

  ngOnInit(): void {

this.getAllDocuments();
  }
  private getAllDocuments(){
    let resp=this.documentService.getDocuments();
    resp.subscribe((data)=>this.document=data);
    console.log(resp);
  }
  delete(){
    this.documentService.deleteDocument(this.doc.id).subscribe((data)=>this.msg=data);
  let resp=this.documentService.getDocuments();
    resp.subscribe((data)=>this.document=data);
  
    this.opened =false;
  }
  edit(d:DocumentAdministratif){
this.doc=d;
this.op=true;
  }
 

  public close() {
    this.opened = false;
    this.op=false;
}

  public open(d:DocumentAdministratif) {
    this.doc=d;
      this.opened = true;
  }
  public modifier(){
    this.docModel.id=this.doc.id;
    
    this.documentService.editDocument(this.docModel).subscribe((data)=>this.msg=data);
    this.getAllDocuments();
    this.router.navigateByUrl('/home/listDocument');
    this.close();
  }
  docform = new FormGroup({});
docModel = new DocumentAdministratif();
  docFields: FormlyFieldConfig[] = [

  {
    key: 'nomDocument',
    type: 'input',
    templateOptions: {
      type: 'nomDocument',
      label: 'Nom document :',
      placeholder: 'nom document',
      required: true,
    },
    validation :{
      messages:{
      required :'raison obligatoire !'
    }
  },
  
  
  },
  {
    key: 'type',
    type: 'textarea',
    templateOptions: {
      type: 'type',
      label: 'Type document :',
      placeholder: 'type',
      required: true,
    },
  
  },
  {
    key: 'titreDocument',
    type: 'textarea',
    templateOptions: {
      type: 'titreDocument',
      label: 'titre Document :',
      placeholder: 'titreDocument',
      required: true,
    },
  
  },{
    key: 'contenuDocument',
    type: 'textarea',
    templateOptions: {
      type: 'contenuDocument',
      label: 'contenu Document :',
      placeholder: 'contenuDocument',
      required: true,
    },
  
  },{
    key: 'headerDocument',
    type: 'textarea',
    templateOptions: {
      type: 'headerDocument',
      label: 'headerDocument :',
      placeholder: 'headerDocument',
      required: true,
    },
  
  },{
    key: 'footerDocument',
    type: 'textarea',
    templateOptions: {
      type: 'footerDocument',
      label: 'footerDocument :',
      placeholder: 'footerDocument',
      required: true,
    },
  
  },
 

];

}
