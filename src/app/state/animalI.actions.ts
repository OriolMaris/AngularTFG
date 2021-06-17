import { createAction, props } from '@ngrx/store';
import { Update, EntityMap, Predicate } from '@ngrx/entity';
 
import { AnimalI } from '../models/animal';
 
export const loadAnimalIs = createAction('[AnimalI/API] Load AnimalIs', props<{ animals: AnimalI[] }>());
export const addAnimalI = createAction('[AnimalI/API] Add AnimalI', props<{ animal: AnimalI }>());
export const setAnimalI = createAction('[AnimalI/API] Set AnimalI', props<{ animal: AnimalI }>());
export const upsertAnimalI = createAction('[AnimalI/API] Upsert AnimalI', props<{ animal: AnimalI }>());
export const addAnimalIs = createAction('[AnimalI/API] Add AnimalIs', props<{ animals: AnimalI[] }>());
export const upsertAnimalIs = createAction('[AnimalI/API] Upsert AnimalIs', props<{ animals: AnimalI[] }>());
export const updateAnimalI = createAction('[AnimalI/API] Update AnimalI', props<{ update: Update<AnimalI> }>());
export const updateAnimalIs = createAction('[AnimalI/API] Update AnimalIs', props<{ updates: Update<AnimalI>[] }>());
export const mapAnimalIs = createAction('[AnimalI/API] Map AnimalIs', props<{ entityMap: EntityMap<AnimalI> }>());
export const deleteAnimalI = createAction('[AnimalI/API] Delete AnimalI', props<{ id: string }>());
export const deleteAnimalIs = createAction('[AnimalI/API] Delete AnimalIs', props<{ ids: string[] }>());
export const deleteAnimalIsByPredicate = createAction('[AnimalI/API] Delete AnimalIs By Predicate', props<{ predicate: Predicate<AnimalI> }>());
export const clearAnimalIs = createAction('[AnimalI/API] Clear AnimalIs');