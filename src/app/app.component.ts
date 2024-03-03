import { Component, OnInit } from '@angular/core';

interface sideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ERPDashboard';
  isSideNavCollapsed =false;
  screenWidth = 0;

  

  constructor(){}

  

  onToggleSideNav(data:sideNavToggle): void{
    this.isSideNavCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }


}
