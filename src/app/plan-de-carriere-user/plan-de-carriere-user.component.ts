import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-plan-de-carriere-user',
  templateUrl: './plan-de-carriere-user.component.html',
  styleUrls: ['./plan-de-carriere-user.component.css']
})
export class PlanDeCarriereUserComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '{}');
    console.log("+++++++++++++++++++++" + id);
  }

}
