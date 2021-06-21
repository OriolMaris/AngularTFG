import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { Store } from '@ngrx/store';
import { AnimalServiceService } from 'src/app/animal-service.service';
import { BehaviorSubject } from 'rxjs';
import { Animal } from 'src/app/models/model';
import { selectAnimal } from 'src/app/state/animal.actions';


@Component({
  selector: 'app-cats-grid',
  templateUrl: './cats-grid.component.html',
  styleUrls: ['./cats-grid.component.css']
})

export class CatsGridComponent implements OnInit, OnChanges {

  public cats: BehaviorSubject<any[]> = new BehaviorSubject<any[]> ([]);
  
  public images = [];

  constructor(private route: ActivatedRoute,
    private router: Router, 
    private store: Store,
    private serviceAnimal: AnimalServiceService) { }

  ngOnInit(): void {

    this.serviceAnimal.getCats();
    this.cats = this.serviceAnimal.cats;
    this.images = this.serviceAnimal.imagesCats;
    this.cats.subscribe((data) => {
      console.log(data)
    })
  }

  ngOnChanges(): void {
    this.serviceAnimal.getCats();
    this.cats = this.serviceAnimal.cats;
    this.images = this.serviceAnimal.imagesCats;
    this.cats.subscribe((data) => {
      console.log(data)
    })
  }

  
  hasData(){

    let bool;
    this.cats.subscribe((data) => {
      if (data.length === 0) bool = false;
      else bool = true;
    })
    return bool;
  }

  
  gotoAnimal(animal: Animal) {

    this.store.dispatch(selectAnimal({selectedAnimal: animal}));
    this.router.navigate(['/animal']);
  }

}
