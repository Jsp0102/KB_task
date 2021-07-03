import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.sass']
})
export class ClientsComponent implements OnInit {
  title:string = 'Clients';
  date:Date = new Date;
  clients:any = [{
    id: 1,
    name: 'Apple',
    date: this.date,
    assigned_member: 'Prakhar Niharika Gupta'
  }]
  constructor() { }

  ngOnInit(): void {
  }
  search_by_client_name(event:any){
    console.log("Client Name", event.target.value);
  }
  showClientFilter: boolean = false;
  clientFilterDropdown() {
    this.showClientFilter = !this.showClientFilter;
  }
  assigned_member_status:string = '';
  assigned_member_name:string = 'All Members';
  getClientsByStatus(status: string, name: string) {
    this.assigned_member_status = status;
    this.assigned_member_name = name;
  }

}
