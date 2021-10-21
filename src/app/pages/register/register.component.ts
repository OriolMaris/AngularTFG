import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/user-service.service';
import { Location } from '@angular/common'
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    public dialog: MatDialog,

    ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back()
  }

  isButtonDisabled() {
    if (this.nameFormControl.value === ''){
      return true
    }
    if (this.emailFormControl.value === ''){
      return true
    } 
    if (this.passwordFormControl.value === ''){
      return true
    } 
    if (this.valPasswordFormControl.value === ''){
      return true
    } 
    if (this.telefonFormControl.value === ''){
      return true
    }
    if (!this.checked){
      return true
    } 
    /*
    if (this.emailFormControl.value === null || this.emailFormControl.value === undefined || this.emailFormControl.value === '') return true
    if (this.passwordFormControl.value === null || this.passwordFormControl.value === undefined || this.passwordFormControl.value === '') return true
    if (this.valPasswordFormControl.value === null || this.valPasswordFormControl.value === undefined || this.valPasswordFormControl.value === '') return true
    if (this.telefonFormControl.value === null || this.telefonFormControl.value === undefined || this.telefonFormControl.value === '') return true
    */
    return false
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

   
      this.userService.Register(fd)
     // this.openDialog()
   
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
    });
  }

  openDialogError(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog2, {
      width: '250px',
    });
  }


  goToTermsAndConditions(){

    console.log('entro')
    this.router.navigate(['/terms']);
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
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
export class DialogOverviewExampleDialog2 {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog2>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  onYesClick(): void {
    this.router.navigate(['/login']);

    this.dialogRef.close();
  }

}