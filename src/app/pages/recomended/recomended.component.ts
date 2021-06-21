import { Component, OnInit } from '@angular/core';
import { AnimalServiceService } from 'src/app/animal-service.service';
import { UserServiceService } from 'src/app/user-service.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-recomended',
  templateUrl: './recomended.component.html',
  styleUrls: ['./recomended.component.css']
})
export class RecomendedComponent implements OnInit {

  age = null; 
  hab = null; 
  caracter = null; 
  dispo = null; 


  constructor(private animalService: AnimalServiceService,
    private userService: UserServiceService,
    private location: Location, 

    ) { }

  ngOnInit(): void {

    if (!!this.userService.user){
      if (!!this.userService.user.edat) this.age = this.userService.user.edat;
      if (!!this.userService.user.habitatje) this.hab = this.userService.user.habitatje;
      if (!!this.userService.user.caracter) this.caracter = this.userService.user.caracter;
      if (!!this.userService.user.h_dispo) this.dispo = this.userService.user.h_dispo;
    }
    this.animalService.getRecomended(this.age, this.hab, this.caracter , this.dispo);

    console.log('recomennatstttttttsttststststs');
    console.log(this.userService.user.edat, this.hab, this.caracter , this.dispo);
  }

  goBack() {
    this.location.back();
  }

}
