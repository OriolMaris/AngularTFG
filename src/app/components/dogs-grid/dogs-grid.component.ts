import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { Store } from '@ngrx/store';
import { AnimalServiceService } from 'src/app/animal-service.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-dogs-grid',
  templateUrl: './dogs-grid.component.html',
  styleUrls: ['./dogs-grid.component.css']
})
export class DogsGridComponent implements OnInit, OnChanges {

  public dogs: BehaviorSubject<any[]> = new BehaviorSubject<any[]> ([]);
  
  public images = [];

  constructor(private route: ActivatedRoute,
    private router: Router, 
    private location: Location,
    private store: Store,
    private serviceAnimal: AnimalServiceService) { }

  ngOnInit(): void {

    this.serviceAnimal.getDogs();
    this.dogs = this.serviceAnimal.dogs;
    this.images = this.serviceAnimal.imagesDogs;
    this.dogs.subscribe((data) => {
      console.log(data)
    })
  }

  ngOnChanges(): void {
    this.serviceAnimal.getDogs();
    this.dogs = this.serviceAnimal.dogs;
    this.images = this.serviceAnimal.imagesDogs;
    this.dogs.subscribe((data) => {
      console.log(data)
    })
  }

}
