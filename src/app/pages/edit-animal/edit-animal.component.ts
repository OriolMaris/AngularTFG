import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { FormControl, Validators } from '@angular/forms';
import { AnimalI } from 'src/app/models/animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { cities } from 'src/assets/cities/cities';
import { races } from 'src/assets/races/races';
import { select, Store } from '@ngrx/store';
import { selectedAnimal } from 'src/app/state/animal.selector';
import { AnimalServiceService } from 'src/app/animal-service.service';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent implements OnInit {

  
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  ageFormControl = new FormControl('', [
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
  caracters: any[] = [
    {value: 'Dominante'},
    {value: 'Equilibrado'},
    {value: 'Sumiso'},
    {value: 'Docil'},
    {value: 'Independiente'},
  ];
  hair_types: any[] = [
    {value: 'duro'},
    {value: 'rizado'},
    {value: 'corto'},
    {value: 'largo'}
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


  animal;

  animalObs$ = this.store.pipe(select(selectedAnimal));

  constructor(
    private location: Location, 
    private http: HttpClient,
    private store: Store,
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

    this.animalObs$.subscribe((data) => {
      this.animal = data;
      console.log(this.animal)
    });

    this.nameFormControl.setValue(this.animal.name);
    this.ageFormControl.setValue(this.animal.age);
    this.photoFormControl.setValue(this.animal.photo_name);
    this.description.setValue(this.animal.description);

    this.selectedEspecie = this.animal.species;
    this.selectedSexe = this.animal.sexe;
    this.selectedCaracter = this.animal.caracter;
    this.selectedHairType = this.animal.hair_type;

    this.tamanyToggle = this.animal.size;
    this.castratToggle = String(this.animal.castrat);
    this.microxipToggle = String(this.animal.microxip);
    this.vacunatToggle = String(this.animal.vacunated);
    this.desparasitatToggle = String(this.animal.esterizated);
    
    this.myControl.setValue(this.animal.race);
    this.myControl2.setValue(this.animal.ciutat);

  }


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


    let fd = new FormData();
    var formData = new FormData();

    
    fd.append('name', this.nameFormControl.value)
    fd.append('age', this.ageFormControl.value)
    fd.append('sexe', this.selectedSexe)
    fd.append('race', this.myControl.value)
    fd.append('species', this.selectedEspecie)
    fd.append('photo_name', this.animal.photo_name)
    fd.append('owner_id', this.animal.owner_id)
    fd.append('caracter', this.selectedCaracter)
    fd.append('hair_type', this.selectedHairType)
    fd.append('castrat', this.castratToggle)
    fd.append('ciutat', this.myControl2.value)
    fd.append('size', this.tamanyToggle)
    fd.append('description', this.description.value)
    //fd.append('description', this.animal.photo_name)
    fd.append('microxip', this.microxipToggle)
    fd.append('vacunated', this.vacunatToggle)
    fd.append('esterizated', this.desparasitatToggle)

    console.log(this.nameFormControl.value)
    console.log(this.animal.id)
    console.log()

    this.serviceAnimal.EditAnimal(this.animal.id, fd);
  }

  onChange(event) {
    console.log(event);
    this.fileSelected = event.target.files[0];
    console.log(this.fileSelected);

  }

}
