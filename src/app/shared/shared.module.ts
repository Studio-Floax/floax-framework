import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NTitleComponent } from './components/n-title/n-title.component';
import { FLoginFormComponent } from './components/f-login-form/f-login-form.component';

@NgModule({
  declarations: [
    NTitleComponent,
    FLoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,    
  ],
  exports: [
    NTitleComponent,
    FLoginFormComponent
  ]
})
export class SharedModule { }
