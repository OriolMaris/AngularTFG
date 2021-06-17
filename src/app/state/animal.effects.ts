import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { LaravelApiService } from '../laravel-api.service';
import { AnimalI } from '../models/animal';
import { Animal } from '../models/model';
import {  loadAnimals, loadAnimalsSuccess } from './animal.actions';
import { allAnimals } from './animal.selector';
import { loadAnimalIs } from './animalI.actions';
 
@Injectable()
export class AnimalEffects {

    loadAnimals$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(loadAnimals),
            tap(() => {
              this.service.GetIndex().subscribe((data: AnimalI[]) => {
                

                this.store.dispatch(loadAnimalIs({animals: data}))
              })
            })
          ),
        { dispatch: false }
      );

      AnimalsSuccess$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(loadAnimalsSuccess),
            tap(() => {
                
              console.log('yesaaa')
            })
          ),
        { dispatch: false }
      );
    


  constructor(
    private actions$: Actions,
    private service: LaravelApiService,
    private store: Store
  ) {}

  
}