import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { FButtonComponent } from './components/f-button/f-button.component';
import { FInputComponent } from './components/f-input/f-input.component';
import { FLabelComponent } from './components/f-label/f-label.component';



@NgModule({
  declarations: [
    ComponentsComponent, 
    FButtonComponent, 
    FInputComponent, FLabelComponent, 
  ],
  imports: [
  ],
  exports: [
    ComponentsComponent, 
    FButtonComponent,
    FInputComponent, 
    FLabelComponent
  ]
})
export class ComponentsModule { }
