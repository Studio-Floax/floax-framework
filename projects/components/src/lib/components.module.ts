import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { FButtonComponent } from './components/f-button/f-button.component';
import { FInputComponent } from './components/f-input/f-input.component';



@NgModule({
  declarations: [
    ComponentsComponent, 
    FButtonComponent, 
    FInputComponent, 
  ],
  imports: [
  ],
  exports: [
    ComponentsComponent, 
    FButtonComponent,
    FInputComponent, 
  ]
})
export class ComponentsModule { }
