import { Animal } from '../models/model';

export interface AppState {
  animals: Animal[];
  selectedAnimal: Animal;
}