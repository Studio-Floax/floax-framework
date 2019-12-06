import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CanActivateRouteGuard } from '../shared/services/route-guard.service';
import { FAdminLoginComponent } from './components/f-admin-login/f-admin-login.component';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [CanActivateRouteGuard],
    component: AdminComponent
  },
  {
    path: 'admin/login',
    component: FAdminLoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export const adminRoutingComponents = [AdminComponent, FAdminLoginComponent] // Export of all the Admin Components
