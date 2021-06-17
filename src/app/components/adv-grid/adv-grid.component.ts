import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { AnimalServiceService } from 'src/app/animal-service.service';
import { Animal } from 'src/app/models/model';
import { selectAnimal } from 'src/app/state/animal.actions';

@Component({
  selector: 'app-adv-grid',
  templateUrl: './adv-grid.component.html',
  styleUrls: ['./adv-grid.component.css']
})
export class AdvGridComponent implements OnInit {

  public AllAnimals: BehaviorSubject<any[]> = new BehaviorSubject<any[]> ([]);
  
  public images = [];


  constructor(private route: ActivatedRoute,
    private router: Router, 
    private location: Location,
    private store: Store,
    private serviceAnimal: AnimalServiceService) { }

  ngOnInit(): void {

    this.AllAnimals = this.serviceAnimal.advSearchAnimals;
    this.images = this.serviceAnimal.imagesadvSearchAnimals;
    this.AllAnimals.subscribe((data) => {
      console.log(data)
    })
  }

  gotoAnimal(animal: Animal) {

    this.store.dispatch(selectAnimal({selectedAnimal: animal}));

    this.router.navigate(['/animal']);

  }

}
