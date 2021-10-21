import { Component, Inject, Input, OnChanges, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { TranslateService } from '@ngx-translate/core';
import { select, Store } from '@ngrx/store';
import { selectedAnimal } from 'src/app/state/animal.selector';
import { Animal } from 'src/app/models/model';
import { LaravelApiService } from 'src/app/laravel-api.service';
import { Router } from '@angular/router';
import { AnimalServiceService } from 'src/app/animal-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/user-service.service';
import { selectAnimal } from 'src/app/state/animal.actions';



@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit, OnChanges {

  animal;
  owner;
  tel;


  animalObs$ = this.store.pipe(select(selectedAnimal));

  tamanyToggle: string = '1';
  microxipToggle: string = '1';
  vacunatToggle: string = '1';
  desparasitatToggle: string = '1';
  castratToggle: string = '1';

  descripcio: string;

  photo_path = this.service.GetPhotosId('4');
  images;

  isFav = false;

  constructor(
    private location: Location, 
    private translate: TranslateService,
    private store: Store,
    private router: Router, 
    private service: LaravelApiService,
    private serviceAnimal: AnimalServiceService,
    private userService: UserServiceService,
    public dialog: MatDialog,
    private apiService: LaravelApiService,
    ) { }


    openDialog(): void {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '250px',
        data: {id: this.animal.id}
      });
  

    }


  ngOnInit(): void {

    
    this.animalObs$.subscribe((data: Animal) => {
      this.animal = data;
      console.log(this.animal)
      if (this.animal === undefined || this.animal === null){
        this.router.navigate(['/index'])
      }
      this.apiService.GetUser(this.animal.owner_id ,'').subscribe((data: any) => {
        this.owner = data.name;
        this.tel = data.tel;
      });
      this.descripcio = this.animal.description;
      this.images = this.serviceAnimal.imagesAnimal;
      console.log(this.images)

    });

    this.tamanyToggle = this.animal.size;
    this.microxipToggle = String(this.animal.microxip);
    console.log(this.microxipToggle)
    console.log(this.animal.microxip)
    this.vacunatToggle = String(this.animal.vacunated);
    this.desparasitatToggle = String(this.animal.esterizated);
    this.castratToggle = String(this.animal.castrat);

    if (this.animal.name === undefined){
      this.router.navigate(['/index'])
    }

    console.log(this.animal);
    console.log('this is FAv  ' + this.animal.id);
    
    this.apiService.IsUserFavAnimal(this.userService.user.id, this.animal.id).subscribe((data : any) => {
      this.isFav = data.message
      console.log('data.message' + this.userService.user.id + ' ' + this.animal.id)
      console.log(data.message)
    });

    

    console.log(this.isFav)
  }

  ngOnChanges(){
    this.animalObs$.subscribe((data: Animal) => {
      this.animal = data;
      console.log(this.animal)
      if (this.animal === undefined || this.animal === null){
        this.router.navigate(['/index'])
      }
      this.apiService.GetUser(this.animal.owner_id ,'').subscribe((data: any) => {
        this.owner = data.name;
        this.tel = data.tel;
      });
      this.descripcio = this.animal.description;
      this.images = this.serviceAnimal.imagesAnimal;
      console.log(this.images)

    });

    this.tamanyToggle = this.animal.size;
    this.microxipToggle = String(this.animal.microxip);
    console.log(this.microxipToggle)
    console.log(this.animal.microxip)
    this.vacunatToggle = String(this.animal.vacunated);
    this.desparasitatToggle = String(this.animal.esterizated);
    this.castratToggle = String(this.animal.castrat);

    if (this.animal.name === undefined){
      this.router.navigate(['/index'])
    }

    console.log(this.animal);
    console.log('this is FAv  ' + this.animal.id);
    
    this.apiService.IsUserFavAnimal(this.userService.user.id, this.animal.id).subscribe((data : any) => {
      this.isFav = data.message
      console.log('data.message' + this.userService.user.id + ' ' + this.animal.id)
      console.log(data.message)
    });
  }

  addFav(){
    this.userService.PostUserFavAnimal(this.animal.id);
    this.isFav = !this.isFav;
  }

  deleteFav(){
    this.userService.DeleteUserFavAnimal(this.animal.id);
    this.isFav = !this.isFav;
  }


  goEditAnimal() {
    this.router.navigate(['/editAnimal'])
  }
  
  goBack() {
    this.location.back()

  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  is_owner(){
    if (this.userService.user.id === this.animal.owner_id){
      return true;
    }
    else return false;
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  id;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    private serviceAnimal: AnimalServiceService,
    private store: Store,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.id = data.id;
    }

  onNoClick(): void {
    this.dialogRef.close();

  }

  onYesClick(): void {
    this.dialogRef.close();
    this.serviceAnimal.deleteAnimal(this.id);
    this.store.dispatch(selectAnimal({selectedAnimal: null}));
  }

}