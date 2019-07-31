import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { LoginComponent } from './utilizatorLogIn/login/login.component';
import {AuthService} from "./utilizatorLogIn/login/auth.service";
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './students/student-detail/student-detail/student-detail.component';
import { WelcomeComponent } from './utilizatorLogIn/welcome/welcome.component';
import { ProfesoriComponent } from './profesori/profesori.component';
import { ParticipareSemComponent } from './participare-sem/participare-sem.component';
import {ParticipareService} from "./participare-sem/participare-service.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    StudentsComponent,
    StudentDetailComponent,
    WelcomeComponent,
    ProfesoriComponent,
    ParticipareSemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
        {
          path: '',
          component: HomeComponent
        },
      {
        path: 'login',
        component: LoginComponent
      },
    ])
  ],
  providers: [AuthService, ParticipareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
