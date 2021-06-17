import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnimalComponent } from './pages/add-animal/add-animal.component';
import { AdvSearchComponent } from './pages/adv-search/adv-search.component';
import { AnimalComponent } from './pages/animal/animal.component';
import { ConfigPageComponent } from './pages/config-page/config-page.component';
import { EditAnimalComponent } from './pages/edit-animal/edit-animal.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'animal', component: AnimalComponent },
  { path: 'user', component: UserComponent },
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'config', component: ConfigPageComponent },
  { path: 'addAnimal', component: AddAnimalComponent },
  { path: 'editAnimal', component: EditAnimalComponent },
  { path: 'editUser', component: EditUserComponent },
  { path: 'advSearch', component: AdvSearchComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
