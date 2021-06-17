import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private location: Location,
    private router: Router,
    private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back()

  }

  logIn() {
    
    let fd = new FormData();
    fd.append('email', this.emailFormControl.value);
    fd.append('password', this.passwordFormControl.value);

    this.userService.LogIn(fd);

    // funciona guai
  }

  gotoRegister(){
    this.router.navigate(['/register']);
  }

}
