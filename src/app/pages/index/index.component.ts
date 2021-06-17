import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { LaravelApiService } from 'src/app/laravel-api.service';
import { AnimalI } from 'src/app/models/animal';
import { Animal, AnimalExtraInfo } from 'src/app/models/model';
import { loadAnimals } from 'src/app/state/animal.actions';
import { allAnimals } from 'src/app/state/animal.selector';
import { loadAnimalIs } from 'src/app/state/animalI.actions';
import { selectAllAnimalIs, selectAnimalIEntities } from 'src/app/state/animalI.selector';
import { AppState } from '../../state/app.state';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  animal$: Observable<object>;
  allAnimals$ = this.store.pipe(select(selectAllAnimalIs));

  public selectedIndex: number = 0;

  //animals$ = this.store.pipe(select(selectAllAnimalIs));

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: LaravelApiService,
    private store: Store) { }

    ngOnInit() {
      console.log('JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ')
      console.log(this.selectedIndex)
      /*
      this.store.select(selectAnimalIEntities).subscribe((data) => {
        console.log(data)
      })
      this.store.pipe(select(selectAnimalIEntities)).subscribe((data) => {
        console.log(data)
      })
      */
    
    

    this.store.dispatch(loadAnimals())
    
  }

  setIndex(number: number){
    this.selectedIndex = number;
  }

  gotoItems(hero: any) {
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that item.
    this.router.navigate(['/animal', { id: heroId }]);
    
  }
  gotoAdvSearch() {
    // Pass along the hero id if available
    // so that the HeroList component can select that item.
    this.router.navigate(['/advSearch']);
    
  }

}
