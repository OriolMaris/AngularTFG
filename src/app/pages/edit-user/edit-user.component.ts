import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  user;

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  
  telefonFormControl = new FormControl('', [
    Validators.required,
  ]);


  selectedEdat: string = '';
  selectedHab: string = '';
  selectedDis: string = '';
  selectedCaracter: string = '';

  edats: any[] = [
    {value: 'jove'},
    {value: 'adult'},
    {value: 'gran'},
  ];
  habitatjes: any[] = [
    {value: 'casa petita'},
    {value: 'casa mitjana'},
    {value: 'casa gran'},
  ];
  disponibilitats: any[] = [
    {value: 'alta'},
    {value: 'poco'},
  ];
  caracters: any[] = [
    {value: 'alta'},
    {value: 'poco'},
  ];

  constructor(
    private userService: UserServiceService,

  ) { }

  ngOnInit(): void {

    this.user = this.userService.user;

    this.nameFormControl.setValue(this.user.name);
    this.telefonFormControl.setValue(this.user.telefon);

    this.selectedEdat = this.user.edat;
    this.selectedHab = this.user.habitatje;
    this.selectedCaracter = this.user.caracter;
    this.selectedDis = this.user.h_dispo;
  }

  editUser(){
    let fd = new FormData();

    fd.append('name', this.nameFormControl.value)
    fd.append('telefon', this.telefonFormControl.value)
    fd.append('edat', this.selectedEdat)
    fd.append('habitatje', this.selectedHab)
    fd.append('caracter', this.selectedCaracter)
    fd.append('h_dispo', this.selectedDis)

    this.userService.editUser(fd, this.user.id);  
  }

}