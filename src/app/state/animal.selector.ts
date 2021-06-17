import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { Animal } from "../models/model";
 
export const allAnimals = createSelector(
  (state: AppState) => state.animals,
  (animals: []) => animals
);
 
export const selectedAnimal = createSelector(
    (state: AppState) => state.selectedAnimal,
    (selectedAnimal: Animal) => selectedAnimal
);


