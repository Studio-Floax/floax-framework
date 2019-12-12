import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NTitleComponent } from './components/n-title/n-title.component';
import { FLoginFormComponent } from './components/f-login-form/f-login-form.component';
import { FButtonComponent } from './components/f-button/f-button.component';

@NgModule({
  declarations: [
    NTitleComponent,
    FLoginFormComponent,
    FButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NTitleComponent,
    FLoginFormComponent,
    FButtonComponent,
  ]
})
export class SharedModule { 
}
