import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { select, Store } from '@ngrx/store';
import { allAnimals, selectedAnimal } from 'src/app/state/animal.selector';
import { addAnimal, selectAnimal } from 'src/app/state/animal.actions';
import { Animal } from 'src/app/models/model';
import { async } from 'rxjs';
import { selectAllAnimalIs, selectAnimalIEntities } from 'src/app/state/animalI.selector';
import { AnimalI } from 'src/app/models/animal';
import { AnimalServiceService } from 'src/app/animal-service.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-animals-grid',
  templateUrl: './animals-grid.component.html',
  styleUrls: ['./animals-grid.component.css']
})
export class AnimalsGridComponent implements OnInit {

  public AllAnimals: BehaviorSubject<any[]> = new BehaviorSubject<any[]> ([]);
  
  public images = [];


  constructor(private route: ActivatedRoute,
    private router: Router, 
    private location: Location,
    private store: Store,
    private serviceAnimal: AnimalServiceService) { }

  ngOnInit(): void {

    this.serviceAnimal.getAnimals();
    this.AllAnimals = this.serviceAnimal.animals;
    this.images = this.serviceAnimal.imagesAnimal;
    this.AllAnimals.subscribe((data) => {
      console.log(data)
    })
  }

  gotoAnimal(animal: Animal) {

    this.store.dispatch(selectAnimal({selectedAnimal: animal}));

    this.router.navigate(['/animal']);

  }





}
