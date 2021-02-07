import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormReservationComponent } from './principal/form-reservation/form-reservation.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    FormReservationComponent,
    WelcomeComponent,
    AboutUsComponent,
    OurProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
