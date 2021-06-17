import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, 
    private location: Location) { }

  ngOnInit(): void {
  }

  gotoUser(hero: any) {
    console.log(hero)
    const heroId = hero ? hero.name : null;
    console.log(heroId)

    // Pass along the hero id if available
    // so that the HeroList component can select that item.
    this.router.navigate(['/user', { id: hero }]);
  }

}
