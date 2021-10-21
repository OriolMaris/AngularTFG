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

  tamanyToggle: string = '';
  castratToggle: string = '';
  microxipToggle: string = '';
  vacunatToggle: string = '';
  desparasitatToggle: string = '';


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


    let fd = new FormData();

    console.log('inside search')
    
    if ( this.nameFormControl.value !== '') fd.append('name', this.nameFormControl.value ?? null)
    if ( this.ageFormControl.value !== '') fd.append('age', this.ageFormControl.value ?? null)
    if ( this.selectedSexe !== '') fd.append('sexe', this.selectedSexe ?? null)
    if ( this.raceFormControl.value !== '') fd.append('race', this.raceFormControl.value ?? null)
    if ( this.selectedEspecie !== '') fd.append('especie', this.selectedEspecie ?? null)
    if ( this.selectedCaracter !== '') fd.append('caracter', this.selectedCaracter ?? null)
    if ( this.selectedHairType !== '') fd.append('hair_type', this.selectedHairType ?? null)
    if ( this.castratToggle !== '') fd.append('castrat', this.castratToggle ?? null)
    if ( this.myControl2.value !== '' &&  this.myControl2.value !== null) fd.append('ciutat', this.myControl2.value ?? null)
    if ( this.tamanyToggle !== '') fd.append('size', this.tamanyToggle ?? null)
    if ( this.description.value !== '') fd.append('description', this.description.value ?? null)
    if ( this.microxipToggle !== '') fd.append('microxip', this.microxipToggle ?? null)
    if ( this.vacunatToggle !== '') fd.append('vacunat', this.vacunatToggle ?? null)
    if ( this.desparasitatToggle !== '') fd.append('desparasitat', this.desparasitatToggle ?? null)

    console.log(this.myControl2.value)

    fd.forEach((value,key) => {
      console.log(key+value)
    });


    this.serviceAnimal.getadvSearchAnimals2(fd);
    this.panelOpenState = !this.panelOpenState;

  }

}
