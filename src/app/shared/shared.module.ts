import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from 'components';

import { FLoginFormComponent } from './components/f-login-form/f-login-form.component';

@NgModule({
  declarations: [
    FLoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  exports: [
    FLoginFormComponent
  ]
})
export class SharedModule { 
}
