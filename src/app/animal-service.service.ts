import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { props, Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { LaravelApiService } from './laravel-api.service';
import { AnimalI } from './models/animal';
import { Animal } from './models/model';
import { selectAnimal } from './state/animal.actions';

@Injectable({
  providedIn: 'root'
})
export class AnimalServiceService {

  public animals: BehaviorSubject<any[]> = new BehaviorSubject<any[]> ([]);
  public imagesAnimal = [];

  public dogs: BehaviorSubject<AnimalI[]> = new BehaviorSubject<AnimalI[]> ([]);
  public imagesDogs = [];

  public cats: BehaviorSubject<AnimalI[]> = new BehaviorSubject<AnimalI[]> ([]);
  public imagesCats = [];
  
  public advSearchAnimals: BehaviorSubject<AnimalI[]> = new BehaviorSubject<AnimalI[]> ([]);
  public imagesadvSearchAnimals = [];

  public recomendedAnimals: BehaviorSubject<AnimalI[]> = new BehaviorSubject<AnimalI[]> ([]);


  constructor(private apiService: LaravelApiService,
    private store: Store,
    private router: Router
    ) { }

    

  getAnimals(): void{
    this.animals = new BehaviorSubject<AnimalI[]> ([]);
    this.apiService.GetIndex().subscribe((prods: any) => {

      this.animals.next(prods);
      console.log(prods)
      prods.forEach(element => {
        this.getImageAnimals(element.photo_name, element.id);
      })
    });

    console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
    console.log(this.imagesAnimal);
  }

  getDogs(): void{
    this.dogs = new BehaviorSubject<AnimalI[]> ([]);
    this.apiService.GetGossos().subscribe((prods: any) => {

      this.dogs.next(prods);

      prods.forEach(element => {
        this.getImageDogs(element.photo_name, element.id);
      })
    });
  }

  getCats(): void{
    this.cats = new BehaviorSubject<AnimalI[]> ([]);
    this.apiService.GetGats().subscribe((prods: any) => {

      this.cats.next(prods);

      prods.forEach(element => {
        this.getImageCats(element.photo_name, element.id);
      })
    });
  }

  getRecomended(edat, hab, carcater, dispo): void{
    this.apiService.GetIndex().subscribe((prods: any) => {
     

      //this.recomendedAnimals.next(prods);
      //console.log(prods);

      //if (edat > 60) this.animals.value.sort( (a, b) => a.age - b.age);

      if (edat > 60) {


        this.animals.value.sort( (a, b) => {   // aixo ordena be per small medium big
          if (a.size === 'small' && b.size != 'small'){
            return -1;
          }
          else if (a.size === 'small' && b.size === 'small'){
            return -1;
          }
          else return 1;
        });

      }

      let data = prods;
      let advREsult: Array<any> = [];


      if (!!edat){
        console.log('entro edat')

        data.forEach(element => {
          //comprobar la advSearch
            if (edat > 60) {
                console.log('entro eda22t')

              if (element.species === 'feline' || (element.species === 'cannine' &&  element.size === 'small')) advREsult.push(element);
            }
        })
        data = advREsult;
        advREsult = [];
      }
      console.log(data);

      if (!!hab){
        console.log('entro habitat')

        data.forEach(element => {
          //comprobar la advSearch
          if (hab === 'petita') {
            if (element.species === 'feline' || (element.species === 'cannine' &&  element.size === 'small')) advREsult.push(element);
          }
          else if (hab === 'mitjana') {
            if ((element.species === 'cannine' &&  element.size === 'medium')) advREsult.push(element);
          }
          else if (hab === 'gran') {
            if ((element.species === 'cannine' &&  element.size === 'big')) advREsult.push(element);
          }
        })
        data = advREsult;
        advREsult = [];
      }
      if (!!carcater){

        console.log('entro caracter')
        data.forEach(element => {
          //comprobar la advSearch
          if (carcater === 'dinamic') {
            if (element.caracter === 'Juganer' || element.caracter === 'Equilibrado') advREsult.push(element);
          }
          else if (carcater === 'independent') {
            if (element.caracter === 'Independiente' || element.caracter === 'Equilibrado') advREsult.push(element);
          }
          else if (carcater === 'tranquil') {
            if (element.caracter === 'Docil' || element.caracter === 'Equilibrado') advREsult.push(element);
          }
          else if (carcater === 'fort') {
            if (element.caracter === 'Dominante' || element.caracter === 'Equilibrado') advREsult.push(element);
          }
        })
        data = advREsult;
        advREsult = [];
      }
      if (!!dispo){
        console.log('entro dispo')

        data.forEach(element => {
          //comprobar la advSearch
          if (dispo === 'alta') {
            if (element.caracter === 'Juganer' || element.caracter === 'Dominante' || element.caracter === 'Equilibrado') advREsult.push(element);
          }
          else if (dispo === 'poco') {
            if (element.caracter === 'Independiente' || element.caracter === 'Docil' || element.caracter === 'Equilibrado') advREsult.push(element);
          }
        })
        data = advREsult;
        advREsult = [];
      }



      console.log('recomendededdddd');
      console.log(this.animals.value);
      this.recomendedAnimals.next(data);
     
    });

    console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
    console.log(this.imagesAnimal);
  }

  getRecomended2(age, hab, caracter, dispo){
    this.apiService.PostAnimal3(age, hab, caracter, dispo, 'hello').subscribe((data: any) => {
      console.log('data getRecomended2', data)
      this.recomendedAnimals.next(data);
      
      data.forEach(element => {
        this.getImageAnimals(element.photo_name, element.id);
  
        console.log(this.imagesadvSearchAnimals)
        })
    })

  }

  getadvSearchAnimals2(form: FormData){
    this.apiService.PostAnimal2(form, 'hello').subscribe((data: any) => {
      console.log('data', data)
      this.advSearchAnimals.next(data);
      data.forEach(element => {
        this.getImageAnimals(element.photo_name, element.id);
  
        console.log(this.imagesadvSearchAnimals)
        })
    })

  }

  getadvSearchAnimals(name, age, race, city, sexe, especie, caracter, hair_type, size, castrat, microxip, vacunat, desparasitat): void{
    this.apiService.GetIndex().subscribe((prods: any) => {
      console.log(name)
      console.log(age)
      console.log(race)
      console.log(city)
      console.log(sexe)
      console.log(especie)
      console.log(caracter)


      let data = prods;
      let advREsult: Array<any> = [];


      if (!!name){
        data.forEach(element => {
          //comprobar la advSearch
            if (name === element.name) advREsult.push(element);
        })
        data = advREsult;
        advREsult = [];
      }

      if (!!age){
        data.forEach(element => {
          //comprobar la advSearch
            if (age === element.age) advREsult.push(element);
        })
        data = advREsult;
        advREsult = [];
      }
      if (!!race){
        data.forEach(element => {
          //comprobar la advSearch
            if (race === element.race) advREsult.push(element);
        })
        data = advREsult;
        advREsult = [];
      }
      if (!!city){
        data.forEach(element => {
          //comprobar la advSearch
            if (city === element.ciutat) advREsult.push(element);
        })
        data = advREsult;
        advREsult = [];
      }
      if (!!sexe){
        data.forEach(element => {
          //comprobar la advSearch
            if (sexe === element.sexe) advREsult.push(element);
        })
        data = advREsult;
        advREsult = [];
      }
      if (!!especie){
        data.forEach(element => {
          //comprobar la advSearch
            if (especie === element.species) advREsult.push(element);
        })
        data = advREsult;
        advREsult = [];
      }
      if (!!caracter){
        data.forEach(element => {
          //comprobar la advSearch
            if (caracter === element.caracter) advREsult.push(element);
        })
        data = advREsult;
        advREsult = [];
      }
      if (!!hair_type){
        data.forEach(element => {
          //comprobar la advSearch
            if (hair_type === element.hair_type) advREsult.push(element);
        })
        data = advREsult;
        advREsult = [];
      }
      if (!!size){
        data.forEach(element => {
          //comprobar la advSearch
            if (size === element.size) advREsult.push(element);
        })
        data = advREsult;
        advREsult = [];
      }
      if (!!castrat){
        data.forEach(element => {
          //comprobar la advSearch
            if (castrat === element.castrat) advREsult.push(element);
        })
        data = advREsult;
        advREsult = [];
      }
      if (!!microxip){
        data.forEach(element => {
          //comprobar la advSearch
            if (microxip === element.microxip) advREsult.push(element);
        })
        data = advREsult;
        advREsult = [];
      }
      if (!!vacunat){
        data.forEach(element => {
          //comprobar la advSearch
            if (vacunat === element.vacunated) advREsult.push(element);
        })
        data = advREsult;
        advREsult = [];
      }
      if (!!desparasitat){
        data.forEach(element => {
          //comprobar la advSearch
            if (desparasitat === element.esterizated) advREsult.push(element);
        })
        data = advREsult;
        advREsult = [];
      }

      this.advSearchAnimals.next(data);

      console.log('Real data ')

      console.log(data)
      
      this.advSearchAnimals.next(data);

      console.log(prods)
      data.forEach(element => {
      this.getImageAnimals(element.photo_name, element.id);

      console.log(this.imagesadvSearchAnimals)
      })
    });
  }

  private getImageAnimals(name: string, id: string){

    this.apiService.GetPhotosId(name).subscribe(data => {

      this.createImageFromBlobAnimals(data, parseInt(id));
    })
  }

  private createImageFromBlobAnimals(image: Blob, id: number) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imagesAnimal[id] = reader.result;
    }, false);
    if(image){
      reader.readAsDataURL(image);
    }

    console.log(this.imagesAnimal)
  }

  private getImageDogs(name: string, id: string){

    this.apiService.GetPhotosId(name).subscribe(data => {

      this.createImageFromBlobDogs(data, parseInt(id));
    })
  }

  private createImageFromBlobDogs(image: Blob, id: number) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imagesDogs[id] = reader.result;
    }, false);
    if(image){
      reader.readAsDataURL(image);
    }
  }

  private getImageCats(name: string, id: string){

    this.apiService.GetPhotosId(name).subscribe(data => {

      this.createImageFromBlobCats(data, parseInt(id));
    })
  }

  private createImageFromBlobCats(image: Blob, id: number) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imagesCats[id] = reader.result;
    }, false);
    if(image){
      reader.readAsDataURL(image);
    }
  }



  EditAnimal(id, form){
    this.apiService.PutAnimal(form, id, 'hello').subscribe((data: Animal) => {
      this.store.dispatch(selectAnimal({selectedAnimal: data}));
        this.router.navigate(['/animal']);
    })

  }

  addAnimal(form){
    this.apiService.PostAnimal(form, 'hello').subscribe((data: Animal) => {
      this.store.dispatch(selectAnimal({selectedAnimal: data}));
        this.router.navigate(['/user']);
    })

  }

  deleteAnimal(id){
    this.apiService.DeleteAnimal(id, 'hello').subscribe((data: Animal) => {
        this.router.navigate(['/index']);
    })

  }





  getProduct(id: string): AnimalI{
    let product = null;
    this.animals.value.forEach(prod =>{
      if(prod.id == id){
        product = prod;
      }
    });
    return product;
  }

  getImageProduct(id: number){
    return this.imagesAnimal[id];
  }
}
