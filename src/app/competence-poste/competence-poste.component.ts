import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Competence } from 'src/models/Competence';
import { CompetenceService } from 'src/services/competence-service';

@Component({
  selector: 'app-competence-poste',
  templateUrl: './competence-poste.component.html',
  styleUrls: ['./competence-poste.component.css']
})
export class CompetencePosteComponent implements OnInit {

  constructor(private route:ActivatedRoute,private competenceService:CompetenceService) { }
competences!:Competence[];
  ngOnInit(): void {  let id = parseInt(this.route.snapshot.paramMap.get('id') || '{}');
  console.log("+++++++++++++++++++++" + id);

  let resp = this.competenceService.getCompetencesPoste(id).subscribe((data) => this.competences = data);
  }

}
