import { Component, Inject, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';
import { TranslateService } from '@ngx-translate/core';
//import jsonSe from '../../../assets/i18n/cat. ';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    private userService: UserServiceService,
    private translate: TranslateService,

    ) { }

  ngOnInit(): void {
    this.translate.setDefaultLang('cat');
    this.translate.use('cat');
    this.translate.use('cat');

    //this.translate.getTranslation('cat');
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

  useLanguage(language: string): void {
    
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog3 {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog3>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  onYesClick(): void {
    this.router.navigate(['/login']);

    this.dialogRef.close();
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog-copy.html',
})
export class DialogOverviewExampleDialog4 {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog4>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  onYesClick(): void {
    this.router.navigate(['/login']);

    this.dialogRef.close();
  }

}