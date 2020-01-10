import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FLoginFormComponent } from './components/f-login-form/f-login-form.component';

@NgModule({
  declarations: [
    FLoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FLoginFormComponent
  ]
})
export class SharedModule { 
}
