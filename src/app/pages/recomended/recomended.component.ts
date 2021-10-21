import { Component, OnChanges, OnInit } from '@angular/core';
import { AnimalServiceService } from 'src/app/animal-service.service';
import { UserServiceService } from 'src/app/user-service.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-recomended',
  templateUrl: './recomended.component.html',
  styleUrls: ['./recomended.component.css']
})
export class RecomendedComponent implements OnInit, OnChanges {

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
    

    let fd = new FormData();
    fd.append('age', this.userService.user.edat ?? null)
    fd.append('hab', this.hab ?? null)
    fd.append('carcater', this.caracter ?? null)
    fd.append('dispo', this.dispo ?? null)

    this.animalService.getRecomended2(
      this.userService.user.edat ?? null,
      this.hab ?? null,
      this.caracter ?? null,
      this.dispo ?? null
    );


    console.log('recomennatstttttttsttststststs');
    fd.forEach((value,key) => {
      console.log(key+value)
    });
    console.log(this.userService.user.edat, this.hab, this.caracter , this.dispo);
  }

  ngOnChanges() {
    if (!!this.userService.user){
      if (!!this.userService.user.edat) this.age = this.userService.user.edat;
      if (!!this.userService.user.habitatje) this.hab = this.userService.user.habitatje;
      if (!!this.userService.user.caracter) this.caracter = this.userService.user.caracter;
      if (!!this.userService.user.h_dispo) this.dispo = this.userService.user.h_dispo;
    }
    

    let fd = new FormData();
    fd.append('age', this.userService.user.edat ?? null)
    fd.append('hab', this.hab ?? null)
    fd.append('carcater', this.caracter ?? null)
    fd.append('dispo', this.dispo ?? null)
    console.log('recomennatstttttttsttststststsngOnChanges');
   

  }

  goBack() {
    this.location.back();
  }

}
