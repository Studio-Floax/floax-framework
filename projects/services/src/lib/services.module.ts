import { NgModule } from '@angular/core';
import { ServicesComponent } from './services.component';

import { LoginService } from './services/login.service';
import { CanActivateRouteGuard } from './services/route-guard.service';



@NgModule({
  declarations: [
    ServicesComponent,
  ],
  imports: [
  ],
  exports: [
    ServicesComponent, 
  ]
})
export class ServicesModule { }
