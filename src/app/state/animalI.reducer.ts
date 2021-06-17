import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { AnimalI } from '../models/animal';
import * as AnimalIActions from './animalI.actions';
 
export interface State extends EntityState<AnimalI> {
  // additional entities state properties
  selectedAnimalIId: number | null;
}

export function sortByName1(a: AnimalI, b: AnimalI): number {
  return a.age - b.age;
}

export const adapter: EntityAdapter<AnimalI> = createEntityAdapter<AnimalI>({
  sortComparer: sortByName1
});
 
export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedAnimalIId: null,
});
 
export const animalReducer = createReducer(
  initialState,
  on(AnimalIActions.addAnimalI, (state, { animal }) => {
    return adapter.addOne(animal, state)
  }),
  on(AnimalIActions.setAnimalI, (state, { animal }) => {
    return adapter.setOne(animal, state)
  }),
  on(AnimalIActions.upsertAnimalI, (state, { animal }) => {
    return adapter.upsertOne(animal, state);
  }),
  on(AnimalIActions.addAnimalIs, (state, { animals }) => {
    return adapter.addMany(animals, state);
  }),
  on(AnimalIActions.upsertAnimalIs, (state, { animals }) => {
    return adapter.upsertMany(animals, state);
  }),
  on(AnimalIActions.updateAnimalI, (state, { update }) => {
    return adapter.updateOne(update, state);
  }),
  on(AnimalIActions.updateAnimalIs, (state, { updates }) => {
    return adapter.updateMany(updates, state);
  }),
  on(AnimalIActions.mapAnimalIs, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(AnimalIActions.deleteAnimalI, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(AnimalIActions.deleteAnimalIs, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(AnimalIActions.deleteAnimalIsByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),
  on(AnimalIActions.loadAnimalIs, (state, { animals }) => {
    return adapter.setAll(animals, state);
  }),
  on(AnimalIActions.clearAnimalIs, state => {
    return adapter.removeAll({ ...state, selectedAnimalIId: null });
  })
);
 
export function reducer(state: State | undefined, action: Action) {
  return animalReducer(state, action);
}
 
export const getSelectedAnimalIId = (state: State) => state.selectedAnimalIId;
 
