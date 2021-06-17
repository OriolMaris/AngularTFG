import { createReducer, on, Action } from '@ngrx/store';

import { addAnimal,  loadAnimals, loadAnimalsSuccess, retrievedAnimalList, selectAnimal } from './animal.actions';
import { Animal } from '../models/model';
import { AppState } from './app.state';
import { state } from '@angular/animations';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
 


////////////////
 
export interface User {
  id: string;
  name: string;
}
 
export interface StateUser extends EntityState<User> {
  // additional entities state properties
  selectedUserId: number;
}
 
export function selectUserId1(a: User): string {
  //In this case this would be optional since primary key is id
  return a.id;
}
 
export function sortByName1(a: User, b: User): number {
  return a.name.localeCompare(b.name);
}
 
export const adapter1: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: selectUserId1,
  sortComparer: sortByName1,
});

export const initialState1: StateUser = adapter1.getInitialState({
    // additional entity state properties
    selectedUserId: null,
  });
   
const userReducer = createReducer(initialState1);
   
  export function reducer(state: StateUser | undefined, action: Action) {
    return userReducer(state, action);
  }



//////////////////
export const initialState: AppState = {
    animals: [],
    selectedAnimal: new Animal
};
export function selectAnimalId(a: Animal): string {
    //In this case this would be optional since primary key is id
    return a.id;
}
export function sortByName(a: Animal, b: Animal): number {
    return a.name.localeCompare(b.name);
}


export const initialState2: ReadonlyArray<Animal> = [];

//
export interface State extends EntityState<Animal> {
    // additional entities state properties
    animals: Animal | null;
}

export const adapter: EntityAdapter<Animal> = createEntityAdapter<Animal>({
    selectId: selectAnimalId,
    sortComparer: sortByName,
});

export const initialState3: State = adapter.getInitialState({
    // additional entity state properties
    animals: null,
});
//

/*
*/
export const animals2Reducer = createReducer(
    initialState3,
  on(loadAnimals, (state ) => {
      return state;
  }),  
  on(loadAnimalsSuccess, (state, { allAnimals }) => {
    return adapter.addMany(allAnimals, state)
  }),
  on(loadAnimalsSuccess, (state, { allAnimals }) => {
    return adapter.addMany(allAnimals, state)
  }),
);

export const animal3Reducer = createReducer(
    initialState.animals,
    on(addAnimal, (state, { Animal }) => [state, Animal]),
);



export const selectedAnimalReducer = createReducer(
    initialState.selectedAnimal,
    on(selectAnimal, ((state, { selectedAnimal }) => {
        return selectedAnimal;
      })
    ),
);



