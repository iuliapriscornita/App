import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./utilizatorLogIn/login/login.component";
import {WelcomeComponent} from "./utilizatorLogIn/welcome/welcome.component";
import {StudentsComponent} from "./students/students.component";
import {ProfesoriComponent} from "./profesori/profesori.component";
import {ParticipareSemComponent} from "./participare-sem/participare-sem.component";

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'Welcome', component:WelcomeComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'profesori', component:ProfesoriComponent},
  {path: 'participaresem', component: ParticipareSemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
