import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { PrimengModule } from 'src/app/primeng.module';



@NgModule({
  declarations: [NavigationComponent, DashboardComponent, TableComponent],
  imports: [
    CommonModule,
    LayoutModule,
    AdminRoutingModule,
    MaterialModule,
    PrimengModule,
  ]
})
export class AdminModule { }
