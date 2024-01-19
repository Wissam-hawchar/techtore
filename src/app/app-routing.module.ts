import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { loginGuard } from './core/guards/login.guard';
import { PersonComponent } from './components/person-crud/person/person.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:"full"
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate:[authGuard]
  },
  {
    path:'person',
    component: PersonComponent,
    canActivate:[authGuard]
  },
  {
    path: 'login',
    component:LoginComponent,
    canActivate:[loginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
