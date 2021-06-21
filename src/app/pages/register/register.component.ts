import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/user-service.service';
import { Location } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  valPasswordFormControl = new FormControl('', [
    Validators.required,
  ]);
  telefonFormControl = new FormControl('', [
    Validators.required,
  ]);

  checked = false;
  indeterminate = false;
  
  constructor(private userService: UserServiceService,
    private location: Location,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back()

  }


  Register(){

  console.log(this.nameFormControl.value)
  console.log(this.emailFormControl.value)
  console.log(this.passwordFormControl.value)
  console.log(this.valPasswordFormControl.value)
  console.log(this.telefonFormControl.value)

    let fd = new FormData();
    fd.append('name', this.nameFormControl.value);
    fd.append('email', this.emailFormControl.value);
    fd.append('password', this.passwordFormControl.value);
    fd.append('password_confirmation', this.valPasswordFormControl.value);
    fd.append('telefon', this.telefonFormControl.value);
    fd.append('Lang', 'cat');

    if (this.checked) this.userService.Register(fd);
  }


  goToTermsAndConditions(){

    console.log('entro')
    this.router.navigate(['/terms']);
  }

}
