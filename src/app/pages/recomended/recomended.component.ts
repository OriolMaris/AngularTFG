import { Component, OnInit } from '@angular/core';
import { AnimalServiceService } from 'src/app/animal-service.service';

@Component({
  selector: 'app-recomended',
  templateUrl: './recomended.component.html',
  styleUrls: ['./recomended.component.css']
})
export class RecomendedComponent implements OnInit {

  constructor(private animalService: AnimalServiceService) { }

  ngOnInit(): void {
    this.animalService.getRecomended(70)
  }

}
