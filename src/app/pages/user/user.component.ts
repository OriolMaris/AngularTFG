import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { UserServiceService } from 'src/app/user-service.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  user;

  constructor(private location: Location,
    private userService: UserServiceService,
    private router: Router, 
    ) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    console.log(this.user)
    console.log(this.userService.user)
    console.log('now fav animals')

    

  }

  goBack() {
    this.location.back()

  }

  addAnimal() {
    this.router.navigate(['/addAnimal']);
  }

  editUser(){
    this.router.navigate(['/editUser']);
  }


}
