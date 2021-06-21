import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { AddAnimalComponent } from './pages/add-animal/add-animal.component';
import { AdvSearchComponent } from './pages/adv-search/adv-search.component';
import { AnimalComponent } from './pages/animal/animal.component';
import { ConfigPageComponent } from './pages/config-page/config-page.component';
import { EditAnimalComponent } from './pages/edit-animal/edit-animal.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { RecomendedComponent } from './pages/recomended/recomended.component';
import { RegisterComponent } from './pages/register/register.component';
import { TermsComponent } from './pages/terms/terms.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: 'animal', component: AnimalComponent,
  canActivate: [AuthGuardGuard] },
  { path: 'user', component: UserComponent,
  canActivate: [AuthGuardGuard] },
  { path: 'index', component: IndexComponent,
  canActivate: [AuthGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'config', component: ConfigPageComponent,
  canActivate: [AuthGuardGuard] },
  { path: 'addAnimal', component: AddAnimalComponent,
  canActivate: [AuthGuardGuard] },
  { path: 'editAnimal', component: EditAnimalComponent,
  canActivate: [AuthGuardGuard] },
  { path: 'editUser', component: EditUserComponent,
  canActivate: [AuthGuardGuard] },
  { path: 'advSearch', component: AdvSearchComponent,
  canActivate: [AuthGuardGuard] },
  { path: 'terms', component: TermsComponent},
  { path: 'recomended', component: RecomendedComponent},
  { path: '**', redirectTo: '/login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
