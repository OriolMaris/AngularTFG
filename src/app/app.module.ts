import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { IndexComponent } from './pages/index/index.component';
import { UserComponent } from './pages/user/user.component';
import { AnimalComponent } from './pages/animal/animal.component';
import { HeaderComponent } from './components/header/header.component';

//
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';


//

//
import { animals2Reducer, selectedAnimalReducer } from './state/animal.reducer';
import { StoreModule } from '@ngrx/store';
//

//
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment
//

//
import { EffectsModule } from '@ngrx/effects';
import { AnimalEffects } from './state/animal.effects';
//
import { MatSliderModule } from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { CatsGridComponent } from './components/cats-grid/cats-grid.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DogsGridComponent } from './components/dogs-grid/dogs-grid.component';
import { AnimalsGridComponent } from './components/animals-grid/animals-grid.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { animalReducer } from './state/animalI.reducer';
import { ConfigPageComponent } from './pages/config-page/config-page.component';
import { AddAnimalComponent } from './pages/add-animal/add-animal.component';
import {MatRadioModule} from '@angular/material/radio';
import { FavGridComponent } from './components/fav-grid/fav-grid.component';
import { OwnGridComponent } from './components/own-grid/own-grid.component';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { EditAnimalComponent } from './pages/edit-animal/edit-animal.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AdvSearchComponent } from './pages/adv-search/adv-search.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AdvGridComponent } from './components/adv-grid/adv-grid.component';
import { AdvGrid2Component } from './components/adv-grid2/adv-grid2.component';
import { RecomendedComponent } from './pages/recomended/recomended.component';
import { RecomendGridComponent } from './components/recomend-grid/recomend-grid.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TermsComponent } from './pages/terms/terms.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    UserComponent,
    AnimalComponent,
    HeaderComponent,
    CatsGridComponent,
    DogsGridComponent,
    AnimalsGridComponent,
    FooterComponent,
    ConfigPageComponent,
    AddAnimalComponent,
    FavGridComponent,
    OwnGridComponent,
    EditAnimalComponent,
    EditUserComponent,
    AdvSearchComponent,
    AdvGridComponent,
    AdvGrid2Component,
    RecomendedComponent,
    RecomendGridComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    //

    //
    StoreModule.forRoot({ 'animal': animalReducer, selectedAnimal: selectedAnimalReducer, animalI: animalReducer}),
    //

    //
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    //

    //
    EffectsModule.forRoot([AnimalEffects]),
    //
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatRadioModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatExpansionModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}