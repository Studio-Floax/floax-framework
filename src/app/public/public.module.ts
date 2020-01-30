import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule, publicRoutingComponents } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';

import { ComponentsModule } from 'components';



@NgModule({
  declarations: [
    PublicComponent,
    publicRoutingComponents // Public Routes and Components declaration
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    ComponentsModule,
  ]
})
export class PublicModule { }
