import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  public uiBasicCollapsed = false;
  public samplePagesCollapsed = false;
  public erpPagesCollapsed = false;
  user_data: any = [];
  id: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.id = this.activatedRoute.snapshot.params.id;

    // let userData = localStorage.getItem("User")
    // if (userData != null) {
    //   this.user_data = JSON.parse(userData);
    // }
    
  }
}
