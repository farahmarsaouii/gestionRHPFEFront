import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  ngOnInit(): void {
    let rep = this.posteService.getPostes().subscribe((data) => {
      this.postes = data;
    });
    
  }
  competences(poste:Poste){
    this.router.navigate(['/home/competencePoste',poste.id]);

  }
}
