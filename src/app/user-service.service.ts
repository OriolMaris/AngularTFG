import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LaravelApiService } from './laravel-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public user;
  public token;
  public animalsProperty;

  public favAnimals: BehaviorSubject<any[]> = new BehaviorSubject<any[]> ([]);;
  public imagesFavAnimals = [];
  
  public ownAnimals: BehaviorSubject<any[]> = new BehaviorSubject<any[]> ([]);;
  public imagesOwnAnimals = [];

  constructor(private apiService: LaravelApiService,
    private router: Router
    ) { }

  Register(body) {
    console.log(body)
    return this.apiService.Register(body).subscribe((data : any) => {
      this.token = data.token;
      this.user = data.user;
      this.router.navigate(['/index']);
    });
  }

  LogIn(body) {
    this.apiService.LogIn(body).subscribe((data : any) => {
      this.token = data.token;
      this.user = data.user;
      this.router.navigate(['/index']);
    });
    return false;
  }

  LogOut() {
    return this.apiService.LogOut(this.token).subscribe((data : any) => {
      this.user = null;
      this.token = null;
    });
  }

  GetUsersAnimals(){
    return this.apiService.GetUsersAnimals(this.user.id).subscribe((data : any) => {
      this.ownAnimals.next(data);
      console.log(data);

      data.forEach(element => {
        console.log(element);
        this.getImageOwnAnimals(element.photo_name, element.id);
      })
    });
  }

  private getImageOwnAnimals(name: string, id){

    this.apiService.GetPhotosId(name).subscribe(data => {

      this.createImageFromBlobOwnAnimals(data, id);
    })
  }

  private createImageFromBlobOwnAnimals(image: Blob, id) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imagesOwnAnimals[id] = reader.result;
    }, false);
    if(image){
      reader.readAsDataURL(image);
    }
  }

  

  GetUsersFavAnimals(){
    return this.apiService.GetUsersFavAnimals(this.user.id).subscribe((data : any) => {
      this.favAnimals.next(data.favourites);
      console.log(data.favourites);

      data.favourites.forEach(element => {
        console.log(element);
        this.getImageFavAnimals(element.photo_name, element.id);
      })
    });
  }

  private getImageFavAnimals(name: string, id){

    this.apiService.GetPhotosId(name).subscribe(data => {

      this.createImageFromBlobFavAnimals(data, id);
    })
  }

  private createImageFromBlobFavAnimals(image: Blob, id) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imagesFavAnimals[id] = reader.result;
    }, false);
    if(image){
      reader.readAsDataURL(image);
    }
  }

  editUser(body, id){
    return this.apiService.PutUser(body, id, '').subscribe((data : any) => {
      this.user = data;
      this.router.navigate(['/user']);
    });
  }

  getUser(body, id){
    return this.apiService.PutUser(body, id, '').subscribe((data : any) => {
      this.user = data;
    });
  }

  PostUserFavAnimal(animal_id){
    return this.apiService.PostUserFavAnimal(this.user.id, animal_id).subscribe((data : any) => {
      //this.GetUsersFavAnimals();
      console.log('hello');
    });
  }

  DeleteUserFavAnimal(animal_id){
    return this.apiService.DeleteUserFavAnimal(this.user.id, animal_id).subscribe((data : any) => {
      //this.GetUsersFavAnimals();
      console.log('hello');
    });
  }

  IsUserFavAnimal(animal_id): boolean{
    let isFav;
      this.apiService.IsUserFavAnimal(this.user.id, animal_id).subscribe((data : any) => {
        
        console.log('inside funtion')
        console.log(data)
        console.log(data.message)
        isFav = data.message;
        console.log(isFav)

        return data.message;
      });
    return isFav;
  }

  GetToken(){
    return this.token;
  }

}
