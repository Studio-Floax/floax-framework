import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule, adminRoutingComponents } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';

//Module that authorize access to Routes
import { CanActivateRouteGuard } from 'services';


@NgModule({
  declarations: [
    AdminComponent,
    adminRoutingComponents, // Admin Routes and Components declaration
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [CanActivateRouteGuard], // Authorization of Routes
})
export class AdminModule { }
