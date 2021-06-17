import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-fav-grid',
  templateUrl: './fav-grid.component.html',
  styleUrls: ['./fav-grid.component.css']
})
export class FavGridComponent implements OnInit {
  
  public favAnimals: BehaviorSubject<any[]> = new BehaviorSubject<any[]> ([]);
  public favAnimalsV2;
  public images = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {

    this.userService.GetUsersFavAnimals();

    this.favAnimals = this.userService.favAnimals;
    this.images = this.userService.imagesFavAnimals;
    this.userService.favAnimals.subscribe((data) => {
      this.favAnimalsV2 = data;
    })
    console.log(this.favAnimalsV2)
  }

}
