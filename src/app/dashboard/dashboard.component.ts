import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  privileges : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.privileges = JSON.parse(localStorage.getItem("privilieges") || "");
    $(".sidebar-dropdown > a").on("click",function() {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });
    
    $("#close-sidebar").on("click",function() {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").on("click",function() {
      $(".page-wrapper").addClass("toggled");
    });
    
  }

  hasPrivilege(privilege : string) : boolean{
    for(let p of this.privileges){
      if(p.authority == privilege){
        return true
      }
    }
    return false;
  }

}
