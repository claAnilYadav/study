import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent,UserProfileDialog } from './components/common/header/header.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { CreateClientLocationComponent } from './client/create-client-location/create-client-location.component';
import { CreateUserLoginComponent } from './client/create-user-login/create-user-login.component';
import { CreatePackageComponent } from './package/create-package/create-package.component';
import { ListPackageComponent } from './package/list-package/list-package.component';
import { ClientBillingComponent } from './billing/client-billing/client-billing.component';
import { CreditPlansComponent } from './components/credit-plans/credit-plans.component';
import { BillingInfoComponent } from './components/billing-info/billing-info.component';
import { UsageStatsComponent } from './components/usage-stats/usage-stats.component';
import { UserAccessComponent, locationAddDialog } from './components/user-access/user-access.component';
import { TopNavbarComponent } from './components/common/top-navbar/top-navbar.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './components/client-layout/client-layout.component';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { ListClientsComponent } from './client/list-clients/list-clients.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { ReportsComponent } from './components/reports/reports.component';
import { MaterialModule } from './material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ErrorInterceptor } from './service/error.interceptor';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,UserProfileDialog,
    AdminDashboardComponent,
    AdminSidebarComponent,
    CreateClientComponent,
    CreateClientLocationComponent,
    CreateUserLoginComponent,
    CreatePackageComponent,
    ListPackageComponent,
    ClientBillingComponent,
    CreditPlansComponent,
    BillingInfoComponent,
    UsageStatsComponent,
    UserAccessComponent,
    TopNavbarComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    AdminHeaderComponent,
    ListClientsComponent,
    InvoiceComponent,
    ReportsComponent,
    locationAddDialog,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    ToastrModule.forRoot(), 
  ],
  exports:[RouterModule,CommonModule,MaterialModule],
  providers: [DatePipe, 
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
