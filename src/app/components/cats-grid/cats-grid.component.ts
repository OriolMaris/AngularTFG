import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { Store } from '@ngrx/store';
import { AnimalServiceService } from 'src/app/animal-service.service';
import { BehaviorSubject } from 'rxjs';


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
    private location: Location,
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

}
