import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { Animal } from 'src/app/models/model';
import { selectAnimal } from 'src/app/state/animal.actions';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-fav-grid',
  templateUrl: './fav-grid.component.html',
  styleUrls: ['./fav-grid.component.css']
})
export class FavGridComponent implements OnInit, OnChanges {
  
  public favAnimals: BehaviorSubject<any[]> = new BehaviorSubject<any[]> ([]);
  public favAnimalsV2;
  public images = [];

  constructor(private userService: UserServiceService,
    private router: Router, 
    private store: Store,
    ) { }

  ngOnInit(): void {

    this.userService.GetUsersFavAnimals();

    this.favAnimals = this.userService.favAnimals;
    this.images = this.userService.imagesFavAnimals;
    this.userService.favAnimals.subscribe((data) => {
      this.favAnimalsV2 = data;
    })

    
  }

  ngOnChanges(): void {
    this.userService.GetUsersFavAnimals();

    this.favAnimals = this.userService.favAnimals;
    this.images = this.userService.imagesFavAnimals;
    this.userService.favAnimals.subscribe((data) => {
      this.favAnimalsV2 = data;
    })
    console.log(this.favAnimalsV2)
  }


  hasData(){

    let bool;
    this.favAnimals.subscribe((data) => {
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
