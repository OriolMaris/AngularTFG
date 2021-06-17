import { createAction, props } from '@ngrx/store';
import { Animal } from '../models/model';


export const loadAnimals = createAction(
    '[Animal List] Add All Animal'
);


export const loadAnimalsSuccess = createAction(
    '[Animal List] Add All Animal SUcces',
    props<{ allAnimals}>()
);



export const addAnimal = createAction(
  '[Animal List] Add Animal',
  props<{ Animal }>()
);

export const selectAnimal = createAction(
    '[Animal List] select an animal',
    props<{ selectedAnimal: Animal }>()
  );
 
export const removeAnimal = createAction(
  '[Animal Collection] Remove Animal',
  props<{ animalId }>()
);
 
export const retrievedAnimalList = createAction(
  '[Animal List/API] Retrieve Animals Success',
  props<{ Animal }>()
);