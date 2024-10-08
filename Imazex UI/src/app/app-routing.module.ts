import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { BillingInfoComponent } from './components/billing-info/billing-info.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { CreateUserLoginComponent } from './client/create-user-login/create-user-login.component';
import { CreditPlansComponent } from './components/credit-plans/credit-plans.component';
import { ListClientsComponent } from './client/list-clients/list-clients.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { ReportsComponent } from './components/reports/reports.component';
import { UsageStatsComponent } from './components/usage-stats/usage-stats.component';
import { UserAccessComponent } from './components/user-access/user-access.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'  },
  { path: 'login', component: LoginComponent }, 
  { path: 'profile', component: UserProfileComponent }, 
  { path: 'client-dashboard', component: DashboardComponent ,
    data:{ breadcrumbs:'Home'},
    children:[
      { path: 'credit', component: CreditPlansComponent },
      { path: 'invoice',component:InvoiceComponent },
      { path: 'usage',component:UsageStatsComponent },
      { path: 'access',component:UserAccessComponent },
    ]},
  { path: 'admin',component:AdminLayoutComponent,
    data:{ breadcrumbs:'Admin'},
    children:[    
    { path: 'admin-dashboard', component: AdminDashboardComponent },
    { path: 'billing-info',component:BillingInfoComponent },
    { path: 'create-client',component:CreateClientComponent },
    { path: 'create-user',component:CreateUserLoginComponent },
    { path: 'package',component:CreditPlansComponent },
    { path: 'client-details',component:ListClientsComponent },
    { path: 'invoice',component:InvoiceComponent },
    { path: 'reports',component:ReportsComponent },]
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
