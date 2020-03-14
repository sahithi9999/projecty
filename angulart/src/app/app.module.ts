import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HomeComponent } from './home/home.component';

import { ImportComponent } from './import/import.component';
import { CompanylistComponent } from './companylist/companylist.component';

import { UserListComponent } from './user-list/user-list.component';
import { AddipoComponent } from './addipo/addipo.component';
import { AddsectorComponent } from './addsector/addsector.component';
import { ManageexchangeComponent } from './manageexchange/manageexchange.component';
import { AddstockpriceComponent } from './addstockprice/addstockprice.component';

import { HttpClientModule } from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import { CompanyComponent } from './company/company.component';
import { SectorlistComponent } from './sectorlist/sectorlist.component';
import { StockexchangelistComponent } from './stockexchangelist/stockexchangelist.component';
import { IposlistComponent } from './iposlist/iposlist.component';
import { UserlandingComponent } from './userlanding/userlanding.component';

import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { StockpricelistComponent } from './stockpricelist/stockpricelist.component';
import { ComparecompanyComponent } from './comparecompany/comparecompany.component';
import { HighchartsChartModule } from 'highcharts-angular';

import { HighchartsService } from './comparecompany/highcharts.service';
import { UseriposlistComponent } from './useriposlist/useriposlist.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,

    SignupComponent,
    HomeComponent,
    AddipoComponent,
    AddsectorComponent,
    AddstockpriceComponent,
    ManageexchangeComponent,
    IposlistComponent,
   

  
    ImportComponent,
    CompanylistComponent,
  
    UserListComponent,
    CompanyComponent,
    SectorlistComponent,
    AdminlandingComponent,
    UserlandingComponent,
    StockpricelistComponent,
    StockexchangelistComponent,
    ComparecompanyComponent,
    UseriposlistComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTablesModule,
    AppRoutingModule,
    HttpClientModule,  
    HighchartsChartModule,
    ReactiveFormsModule,  
    RouterModule.forRoot([
      
      {
        path: 'login',
        component: LoginComponent
     },
     {
      path: 'useriposlist',
      component: UseriposlistComponent
   },
     {
      path: '',
      component: HomeComponent
   },
     {
      path: 'home',
      component: HomeComponent
   },
   {
    path: 'signup',
    component: SignupComponent
 },
 
{
  path: 'import',
  component: ImportComponent
},
{
  path: 'companylist',
  component:CompanylistComponent
},
{
  path: 'stockexchangelist',
  component:StockexchangelistComponent
},
{
  path: 'iposlist',
  component:IposlistComponent
},
{
  path: 'company',
  component: CompanyComponent
},
{
  path: 'stockpricelist',
  component: StockpricelistComponent
},
{
  path: 'adminlanding',
  component: AdminlandingComponent
},
{
  path: 'userlanding',
  component: UserlandingComponent
},
{
  path: 'manageexchange',
  component: ManageexchangeComponent
},
{
  path: 'addipo',
  component: AddipoComponent
},
{
  path: 'addsector',
  component: AddipoComponent
},
{
  path: 'comparecompany',
  component: ComparecompanyComponent
},
{
  path: 'addstockprice',
  component: AddipoComponent
}

   ])
  ],
  providers: [HighchartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
