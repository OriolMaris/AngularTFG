import { Component, OnChanges, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  constructor(private userService: UserServiceService) { }

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

}
