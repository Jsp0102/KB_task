import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  }
  sidebarmenus: any = [
    {
      icon: "fa-dashboard",
      title: "Dashboard",
      route: "/admin"
    },    
    {
      icon: "fa-user",
      title: "Clients",
      route: "/admin/clients"
    },
    {
      icon: "fa-file",
      title: "Documents",
      route: "/admin/calendar"
    },
    {
      icon: "fa-tasks",
      title: "Tasks",
      route: "/admin/profile"
    },
    {
      icon: "fa-credit-card-alt",
      title: "Payments",
      route: "/admin/roomplanner"
    },
    
    
  ];
}
