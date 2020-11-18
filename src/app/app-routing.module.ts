import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { LoginAdminGuard } from './guards/login-admin.guard';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent, canActivate: [LoginAdminGuard]}
  {path: "", pathMatch: "full", redirectTo: "dashboard"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
