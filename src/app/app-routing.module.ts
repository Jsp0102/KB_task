import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientsComponent } from './admin/clients/clients.component';
import { DetailComponent } from './admin/clients/detail/detail.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { 
    path: '', component: AuthComponent,
  },
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path: '', component: DashboardComponent,},
      {path: 'clients', component:ClientsComponent},
      {path: 'clients/:id', component:DetailComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
