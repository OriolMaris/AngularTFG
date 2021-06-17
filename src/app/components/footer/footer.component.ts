import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { loadAnimals } from 'src/app/state/animal.actions';
import { Store } from '@ngrx/store';
import { selectAnimalIEntities } from 'src/app/state/animalI.selector';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentPath;

  constructor(private route: ActivatedRoute,
    private router: Router, 
    private location: Location,
    private store: Store) { }

  ngOnInit(): void {
  }

  gotoUser(hero: any) {
    console.log(hero)
    const heroId = hero ? hero.name : null;
    console.log(this.location.path())

    // Pass along the hero id if available
    // so that the HeroList component can select that item.
    this.router.navigate(['/user', { id: hero }]);
  }

  gotoConfig(hero: any) {
    console.log(hero)
    const heroId = hero ? hero.name : null;
    console.log(this.location.path())

    // Pass along the hero id if available
    // so that the HeroList component can select that item.
    this.router.navigate(['/config', { id: hero }]);
  }

  gotoIndex(hero: any) {
    this.store.dispatch(loadAnimals())

    console.log('estic foooooooooooooo')
    const heroId = hero ? hero.name : null;
    this.store.select(selectAnimalIEntities).subscribe((data) => {
      console.log(data)
    })
    
    this.store.select(selectAnimalIEntities).subscribe((data) => {
      console.log(data)
    })

    // Pass along the hero id if available
    // so that the HeroList component can select that item.
    this.router.navigate(['index', { id: hero }]);
  }

  gotoAnimal() {
    
    // Pass along the hero id if available
    // so that the HeroList component can select that item.
    this.router.navigate(['/animal']);
  }




}
