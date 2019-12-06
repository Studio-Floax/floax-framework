import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';

import { NTitleComponent } from './components/n-title/n-title.component';
import { FLoginFormComponent } from './components/f-login-form/f-login-form.component';
import { FButtonComponent } from './components/f-button/f-button.component';

@NgModule({
  declarations: [
    NTitleComponent,
    FLoginFormComponent,
    FButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbEvaIconsModule,
    NbIconModule
  ],
  exports: [
    NTitleComponent,
    FLoginFormComponent,
    FButtonComponent,
    NbEvaIconsModule,
    NbIconModule
  ]
})
export class SharedModule { 
}
