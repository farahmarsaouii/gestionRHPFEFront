import { Component, OnInit } from '@angular/core';
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
  constructor(private documentService:DocumentsService) { }

  ngOnInit(): void {
    let resp=this.documentService.getDocuments();
    resp.subscribe((data)=>this.document=data);
    console.log(resp);
  }
  delete(d:DocumentAdministratif){
    this.documentService.deleteDocument(d.id).subscribe((data)=>this.msg=data);
  }
  edit(d:DocumentAdministratif){

  }
}
