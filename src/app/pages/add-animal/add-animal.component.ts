import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { FormControl, Validators } from '@angular/forms';
import { AnimalI } from 'src/app/models/animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { cities } from 'src/assets/cities/cities';
import { races } from 'src/assets/races/races';
import { UserServiceService } from 'src/app/user-service.service';
import { AnimalServiceService } from 'src/app/animal-service.service';


@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {

  
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

  constructor(
    private location: Location, 
    private http: HttpClient,
    private userService: UserServiceService,
    private serviceAnimal: AnimalServiceService


  ) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.filteredOptions2 = this.myControl2.valueChanges.pipe(
      startWith(''),
      map(value => this._filter2(value))
    );

      this.myControl.setValue('Two');
  }v


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  
  private _filter2(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options2.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }


  goBack() {
    this.location.back()

  }

  writeTest(){
  }

  register_animal(){

    /*
    console.log(this.nameFormControl.value);
    console.log(this.ageFormControl.value);
    console.log(this.sexeFormControl.value);
    console.log(this.speciesFormControl.value);
    console.log(this.raceFormControl.value);
    console.log(this.tamanyToggle);
    console.log(this.castratToggle);
    console.log(this.microxipToggle);
    console.log(this.vacunatToggle);
    console.log(this.desparasitatToggle);
    */

    let fd = new FormData();

    
    fd.append('name', this.nameFormControl.value)
    fd.append('age', this.ageFormControl.value)
    fd.append('sexe', this.selectedSexe)
    fd.append('race', this.myControl.value)
    fd.append('species', this.selectedEspecie)
    fd.append('owner_id', this.userService.user.id)
    fd.append('caracter', this.selectedCaracter)
    fd.append('hair_type', this.selectedHairType)
    fd.append('castrat', this.castratToggle)
    fd.append('ciutat', this.myControl2.value)
    fd.append('size', this.tamanyToggle)
    fd.append('photo_name', this.fileSelected, this.fileSelected.name)
    fd.append('description', this.description.value)
    fd.append('microxip', this.microxipToggle)
    fd.append('vacunated', this.vacunatToggle)
    fd.append('esterizated', this.desparasitatToggle)

    console.log(this.userService.user.id)

    this.serviceAnimal.addAnimal(fd);
  }

  onChange(event) {
    console.log(event);
    this.fileSelected = event.target.files[0];
    console.log(this.fileSelected);

  }



}
