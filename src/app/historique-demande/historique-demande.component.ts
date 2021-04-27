import { Component, OnInit } from '@angular/core';
import { DemandeDocumentAdministratif } from 'src/models/DemandeDocument';
import { DemandeDocumentsService } from 'src/services/demandeDocuments-service';

@Component({
  selector: 'app-historique-demande',
  templateUrl: './historique-demande.component.html',
  styleUrls: ['./historique-demande.component.css']
})
export class HistoriqueDemandeComponent implements OnInit {
demandedocument!:DemandeDocumentAdministratif[];
dd:any; 
constructor(private demandedoc:DemandeDocumentsService) { }

  ngOnInit(): void {
  
   let resp=this.demandedoc.getDemandeDocuments();
     resp.subscribe((data)=>{this.demandedocument=data;
     console.log(this.demandedocument)}
     ,
			err => {
				console.log(err.message);
			});
    
     
  }

}
