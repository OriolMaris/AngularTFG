import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AnimalServiceService } from 'src/app/animal-service.service';
import { cities } from 'src/assets/cities/cities';
import { races } from 'src/assets/races/races';
import { Location } from '@angular/common'

@Component({
  selector: 'app-adv-search',
  templateUrl: './adv-search.component.html',
  styleUrls: ['./adv-search.component.css']
})
export class AdvSearchComponent implements OnInit {

  
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  ageFormControl = new FormControl('', [
    Validators.required,
  ]);
  sexeFormControl = new FormControl('', [
    Validators.required,
  ]);
  speciesFormControl = new FormControl('', [
    Validators.required,
  ]);
  raceFormControl = new FormControl('', [
    Validators.required,
  ]);
  photoFormControl = new FormControl('', [
    Validators.required,
  ]);
  description = new FormControl('', [
    Validators.required,
  ]);


  fileSelected = null;


  selectedEspecie: string = '';
  selectedSexe: string = '';
  selectedSize: string = '';
  selectedCaracter: string = '';
  selectedHairType: string = '';

  especies: any[] = [
    {value: 'feline'},
    {value: 'cannine'},
  ];
  sexes: any[] = [
    {value: 'male'},
    {value: 'female'}
  ];
  sizes: any[] = [
    {value: 'small'},
    {value: 'medium'},
    {value: 'big'}
  ];
  caracters: any[] = [
    {value: 'Dominante'},
    {value: 'Equilibrado'},
    {value: 'Sumiso'},
    {value: 'Independiente'},
  ];
  hair_types: any[] = [
    {value: 'duro'},
    {value: 'rizado'},
    {value: 'corto'},
    {value: 'corto'}
  ];

  tamanyToggle: string;
  castratToggle: string;
  microxipToggle: string;
  vacunatToggle: string;
  desparasitatToggle: string;


  myControl = new FormControl();
  options: string[] = races;
  filteredOptions: Observable<string[]>;

  myControl2 = new FormControl();
  options2: string[] = cities;
  filteredOptions2: Observable<string[]>;

  panelOpenState = false;
  
  constructor(
    private location: Location, 
    private serviceAnimal: AnimalServiceService

  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back()

  }

  writeTest(){
  }

  closeExpansion(){
    console.log(this.panelOpenState)
    this.panelOpenState = !this.panelOpenState
  }

  Search(){
    this.serviceAnimal.getadvSearchAnimals(this.nameFormControl.value, this.ageFormControl.value, this.myControl.value, this.myControl2.value, this.selectedSexe, this.selectedEspecie, this.selectedCaracter, this.selectedHairType, this.tamanyToggle, this.castratToggle, this.microxipToggle, this.vacunatToggle, this.desparasitatToggle);
    this.panelOpenState = !this.panelOpenState;

  }

}
