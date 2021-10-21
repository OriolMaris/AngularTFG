import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaravelApiService {

  url = 'https://intense-oasis-55639.herokuapp.com/api/';

  constructor(private http: HttpClient) {}

  //==================Register, logIn, logOut ==================
  Register(body) {
    return this.http.post(
      this.url + 'register',
      body
    );
  }

  LogIn(body) {
    return this.http.post(
      this.url + 'login',
      body
    );
  }

  LogOut(token) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });
    return this.http.delete(
      this.url + 'logout',
      {headers}
    );
  }

  //================== Animals ==================
  GetIndex() {
   return this.http.get(
        this.url + 'animals'
    );
  }

  GetAnimal(id) {
    return this.http.get(
         this.url + 'animals/' + id
     );
   }

  GetGats() {
    return this.http.get(
         this.url + 'animals/cats'
     );
  }

  GetGossos() {
    return this.http.get(
         this.url + 'animals/dogs'
     );
  }

  PostAnimal(body, token) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });
    return this.http.post(
      this.url + 'animals',
      body,
      {headers}
    );
  }

  PostAnimal2(body: FormData, token) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });
    console.log(body)
    return this.http.post(
      this.url + 'animals/advSearch',
      body,
    );
  }

  PutAnimal(body, id, token) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });
    return this.http.post(
      this.url + 'animals/' + id + '?_method=PUT',
      body,
      {headers}
    );
  }

  DeleteAnimal(id, token) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });
    return this.http.delete(
      this.url + 'animals/' + id,
      {headers}
    );
  }

  //================== Users ==================

  // GetUsers() {

  //   return this.http.get(
  //     this.url + 'users'
  //   );
  // }

  GetUser(id, token) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });
    return this.http.get(
      this.url + 'users/' + id ,
      {headers}
    );
  }

  PutUser(body, id, token) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });
    return this.http.post(
      this.url + 'user/' + id + '?_method=PUT',
      body,
      {headers}
    );
  }

  GetUsersAnimals(id) {

    return this.http.get(
      this.url + 'animals/' + id + '/owner'
    );
  }

  GetUsersFavAnimals(id) {

    return this.http.get(
      this.url + 'users/' + id + '/fav'
    );
  }

  PostUserFavAnimal(user_id, animal_id) {

    const body = {};
    return this.http.post(
      this.url + 'users/' + user_id + '/fav/' + animal_id,
      body
    );

  }

  DeleteUserFavAnimal(user_id, animal_id) {

    return this.http.delete(
      this.url + 'users/' + user_id + '/fav/' + animal_id
    );
    
  }

  IsUserFavAnimal(user_id, animal_id) {

    return this.http.get(
      this.url + 'users/' + user_id + '/fav/' + animal_id
    );
    
  }












  GetPhotos() {
    return this.http.get(
         this.url + 'upload'
     );
   }

    /*
   GetPhotosId(id: string): Observable<Blob> {
    return this.http.get(
         this.url + 'upload/' + id , { responseType: 'Blob'}
     );
   }
   */

   
  GetPhotosId(id: string): Observable<Blob> {
    console.log('id : ' + id)
    return this.http.get(`${this.url}upload2/${id}`, {responseType: "blob"});
  }

  PostAnimalv2(){
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + '1|aSJ6e0Kr80Em9lYoAqJKMr4PWG1c0d8h1AWcBwQu'
    });

    const body = {
      name: 'kangarooo',
      age: 'caca',
      sexe: 'male',
      race: 'afgana',
      species: 'gat',
    };

    return this.http.post(
        this.url + 'animals',
        body,
        {headers}
    );
  }
}

