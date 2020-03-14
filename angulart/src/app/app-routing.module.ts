import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

import { ImportComponent } from './import/import.component';
import { CompanylistComponent } from './companylist/companylist.component';

import { UserListComponent } from './user-list/user-list.component';
import { CompanyComponent } from './company/company.component';
import { StockexchangelistComponent } from './stockexchangelist/stockexchangelist.component';
import { StockpricelistComponent } from './stockpricelist/stockpricelist.component';
import { SectorlistComponent } from './sectorlist/sectorlist.component';
import { IposlistComponent } from './iposlist/iposlist.component'; 
import { AddipoComponent } from './addipo/addipo.component'; 
import { ManageexchangeComponent } from './manageexchange/manageexchange.component';
import { AddsectorComponent } from './addsector/addsector.component';
import { AddstockpriceComponent } from './addstockprice/addstockprice.component';
import { UseriposlistComponent } from './useriposlist/useriposlist.component';







const routes: Routes = [
{path:"signup",component:SignupComponent},
{path:"",component:HomeComponent},
{path:"home",component:HomeComponent},

{path:"login",component:LoginComponent},
{path:"useriposlist",component:UseriposlistComponent},


{path:"import",component:ImportComponent},
{path:"companylist",component:CompanylistComponent},
{path:"stockexchangelist",component:StockexchangelistComponent},
{path:"stockpricelist",component:StockpricelistComponent},
{path:"iposlist",component:IposlistComponent},
{path:"sectorlist",component:SectorlistComponent},
{path:"addipo",component:AddipoComponent},
{path:"manageexchange",component:ManageexchangeComponent},
{path:"addsector",component:AddsectorComponent},
{path:"addstockprice",component:AddstockpriceComponent},





  {path:'userlist',component:UserListComponent},
  {path:'company',component:CompanyComponent},
  {path:'iposlist',component:IposlistComponent},
  {path:'stockexchangelist',component:StockexchangelistComponent},
  {path:'stockpricelist',component:StockpricelistComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
