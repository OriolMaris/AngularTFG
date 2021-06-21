import { Component, Input, OnChanges, OnInit } from '@angular/core';
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
  selector: 'app-adv-grid2',
  templateUrl: './adv-grid2.component.html',
  styleUrls: ['./adv-grid2.component.css']
})
export class AdvGrid2Component implements OnInit, OnChanges {

  public AllAnimals: BehaviorSubject<any[]> = new BehaviorSubject<any[]> ([]);
  
  public images = [];


  constructor(private route: ActivatedRoute,
    private router: Router, 
    private store: Store,
    private serviceAnimal: AnimalServiceService) { }

  ngOnInit(): void {

    this.AllAnimals = this.serviceAnimal.advSearchAnimals;
    this.images = this.serviceAnimal.imagesAnimal;

    console.log('this.images from advSearch component')
    console.log(this.images)


    this.AllAnimals.subscribe((data) => {
      console.log('this.AllAnimals ------------------------------------->');
      console.log(data);
    })
  }

  ngOnChanges(): void {
    this.AllAnimals = this.serviceAnimal.advSearchAnimals;
    this.images = this.serviceAnimal.imagesAnimal;

    console.log('this.images from advSearch component')
    console.log(this.images)


    this.AllAnimals.subscribe((data) => {
      console.log('this.AllAnimals ------------------------------------->');
      console.log(data);
    })
  }

  gotoAnimal(animal: Animal) {

    this.store.dispatch(selectAnimal({selectedAnimal: animal}));

    this.router.navigate(['/animal']);

  }


  hasData(){

    let bool;
    this.AllAnimals.subscribe((data) => {
      if (data.length === 0) bool = false;
      else bool = true;
    })
    return bool;
  }

}
