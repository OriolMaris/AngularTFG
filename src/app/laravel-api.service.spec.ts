import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LaravelApiService } from './laravel-api.service';
import { of } from 'rxjs';
import { AnimalI } from './models/animal';
import { AnimalServiceService } from './animal-service.service';

describe('LaravelApiService', () => {
  let service: LaravelApiService;
  let AnimalS: AnimalServiceService;
  let servicePost: LaravelApiService;

  let httpClientSpy: { get: jasmine.Spy };
  let httpClientSpyPost: { post: jasmine.Spy };
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ LaravelApiService ]
    });
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpyPost = jasmine.createSpyObj('HttpClient', ['post']);
    AnimalS = new AnimalServiceService(null, null, null);
    service = new LaravelApiService(httpClientSpy as any);
    servicePost = new LaravelApiService(httpClientSpyPost as any);
  });

  it('should return animal created (HttpClient called once)', (done: DoneFn) => {
    const animalCreated: any[] =
      [{ id: 1, name: "testAnimal", photo: "data:image/png;base64,test-image" }];
  
    httpClientSpyPost.post.and.returnValue(of(animalCreated));

    let body = [{
      name: "testAnimal",
      photo: "data:image/png;base64,test-image"
    }]
  
    servicePost.PostAnimal(body, null).subscribe((data) => {
      data 
      expect(data).toEqual(animalCreated, 'expected animal')
      done.fail
    });
    expect(httpClientSpyPost.post.calls.count()).toBe(1, 'one call');
  });

  it('should return user created (HttpClient called once)', (done: DoneFn) => {
    const userCreated: any[] =
      [{ name: 1, email: 'A' }];
  
    httpClientSpyPost.post.and.returnValue(of(userCreated));

    let body = [{
      name: "name",
      email: "name",
    }]
  
    servicePost.Register(body).subscribe((data) => { 
      expect(data).toEqual(userCreated, 'expected user')
      done.fail
    });
    expect(httpClientSpyPost.post.calls.count()).toBe(1, 'one call');
  });

  it('should return expected animal with id 1(HttpClient called once)', (done: DoneFn) => {
    const expectedAnimal: any[] =
      [{ id: 1, name: 'A' }];
  
    httpClientSpy.get.and.returnValue(of(expectedAnimal));
  
    servicePost.GetAnimal(1).subscribe((data) => { 
      expect(data).toEqual(expectedAnimal, 'expected user')
      done.fail
    });
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return expected user with id 1 (HttpClient called once)', (done: DoneFn) => {
    const expectedUser: any[] =
      [{ id: 1, name: 'A' }];
  
    httpClientSpy.get.and.returnValue(of(expectedUser));
  
    servicePost.GetUser(1, null).subscribe((data) => { 
      expect(data).toEqual(expectedUser, 'expected user')
      done.fail
    });
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return expected recomended animal (HttpClient called once)', (done: DoneFn) => {
    const expectedAnimal: any[] =
      [{ id: 1, name: 'A' }];
  
    httpClientSpy.get.and.returnValue(of(expectedAnimal));
  
    let edat = 1;
    let hab = 1;
    let caracter = 1;
    let dispo = 1;

    AnimalS.getRecomended(edat, hab, caracter, dispo);
    expect(AnimalS.recomendedAnimals.value).toEqual(expectedAnimal, 'expected recomended animal')
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  

});
