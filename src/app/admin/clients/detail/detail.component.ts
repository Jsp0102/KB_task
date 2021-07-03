import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  title:string = '';
  date:Date = new Date;
  client_id: string = "";
  clientData: any = [];
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { 
    
  }

  ngOnInit(): void {
    this.client_id = this.activatedRoute.snapshot.params.id;
    this.clients.forEach((value:any) => {
      if(value.id == this.client_id){
        this.clientData = value;
        this.title = value.name;
      }
    });
  }
  clients:any = [{
    id: 1,
    name: 'Apple',
    date: this.date,
    assigned_member: 'Prakhar Niharika Gupta'
  }];
  showClientFilter: boolean = false;
  clientFilterDropdown() {
    this.showClientFilter = !this.showClientFilter;
  }
  assigned_member_status:string = '';
  assigned_member_name:string = 'July';
  getClientsByStatus(status: string, name: string) {
    this.assigned_member_status = status;
    this.assigned_member_name = name;
  }

}
