import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';
  import * as fromAnimalI from './animalI.reducer';
import { adapter } from './animalI.reducer';
export const AUTH_STATE_NAME = 'auth';

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = adapter.getSelectors();


  export interface State {
    animals: fromAnimalI.State;
  }


  export const reducers: ActionReducerMap<State> = {
    animals: fromAnimalI.reducer,
  };
  export const selectAnimalIState = createFeatureSelector<fromAnimalI.State>('animal');
   
  export const selectAnimalIIds = createSelector(
    selectAnimalIState,
    selectIds // shorthand for animalsState => fromAnimalI.selectAnimalIIds(animalsState)
  );
  export const selectAnimalIEntities = createSelector(
    selectAnimalIState,
    selectEntities
  );
  export const selectAllAnimalIs = createSelector(
    selectAnimalIState,
    selectAll
  );
  export const selectAnimalITotal = createSelector(
    selectAnimalIState,
    selectTotal
  );