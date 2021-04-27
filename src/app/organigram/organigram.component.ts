import { Component, Input, OnInit } from '@angular/core';
import * as go from 'gojs';
const $ =go.GraphObject.make;
declare const OrgChart:any;


@Component({
  selector: 'app-organigram',
  templateUrl: './organigram.component.html',
  styleUrls: ['./organigram.component.css']
})
export class OrganigramComponent implements OnInit {

  
  constructor() {
   
   }

  ngOnInit(): void {
    
    var chart = new OrgChart(document.getElementById("orgchart"),  {
     // template: "luba", 
      layout: OrgChart.action.mixed,
      mouseScrool: OrgChart.action.none,
      nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img"
      },
      nodes: [
          { id: 1, name: "nomceo", title:"CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
          { id: 2, pid: 1, name: "Ava Field" },
          { id: 3, pid: 1, name: "Peter Stevens" },
         
          { id: 4, pid: 1, name: "Ava Field" },
          { id: 5, pid: 1, name: "Peter Stevens" },
        
          { id: 6, pid: 1, name: "Ava Field" },
          { id: 7, pid: 1, name: "Peter Stevens" },
        
          { id: 8, pid: 2, name: "Ava Field" },
          { id: 9, pid: 2, name: "Peter Stevens" },
       
          { id: 14, pid: 3, name: "Ava Field" },
          { id: 15, pid: 3, name: "Peter Stevens" }
      ]
  });
  }


}



