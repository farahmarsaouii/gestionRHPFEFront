import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public thumbnailSrc = 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg';
  public cover = 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/black_sea.jpg';
  public onFabClick(): void {
    console.log('Added');
}
}
