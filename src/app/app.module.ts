import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{  ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { CustomAlertComponent } from './custom-alert/custom-alert.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes : Routes =
[
   { path :'Login',  component: LoginComponent }, 
   { path :'Details',  component: DetailsComponent },
   { path :'Signup',  component: SignUpComponent },
   { path :'',  component: LoginComponent },
   { path :'*',  component: LoginComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsComponent,
    CustomAlertComponent,
    SignUpComponent
  ],
  imports: [
    RouterModule.forRoot(routes,{ enableTracing: true}),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,    
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [DetailsComponent],
  entryComponents : [DetailsComponent,CustomAlertComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
