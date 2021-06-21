import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { Animal } from 'src/app/models/model';
import { selectAnimal } from 'src/app/state/animal.actions';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-own-grid',
  templateUrl: './own-grid.component.html',
  styleUrls: ['./own-grid.component.css']
})
export class OwnGridComponent implements OnInit, OnChanges {

  public ownAnimals: BehaviorSubject<any[]> = new BehaviorSubject<any[]> ([]);
  public ownAnimalsV2;
  public images = [];

  constructor(private userService: UserServiceService,
    private router: Router, 
    private store: Store,
    ) { }

  ngOnInit(): void {

    this.userService.GetUsersAnimals();

    this.ownAnimals = this.userService.ownAnimals;
    this.images = this.userService.imagesOwnAnimals;
    this.userService.ownAnimals.subscribe((data) => {
      this.ownAnimalsV2 = data;
    })
    console.log(this.ownAnimalsV2)
  }

  ngOnChanges(): void{
    this.userService.GetUsersAnimals();

    this.ownAnimals = this.userService.ownAnimals;
    this.images = this.userService.imagesOwnAnimals;
    this.userService.ownAnimals.subscribe((data) => {
      this.ownAnimalsV2 = data;
    })
    console.log(this.ownAnimalsV2)
  }

  hasData(){

    let bool;
    this.ownAnimals.subscribe((data) => {
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
