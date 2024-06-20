import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

@Component({
  selector: 'app-register-net-banking',
  templateUrl: './register-net-banking.component.html',
  styleUrls: ['./register-net-banking.component.css']
})
export class RegisterNetBankingComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      pan: ['', Validators.required],
      accountNumber: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]],
      ifscCode: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
      balance: [0]
    });
  }

  submitForm() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      const userDetails = {
        userNetBankId: 0,
        email: formData['email'],
        password: formData['password'],
        accountNumber: formData['accountNumber'],
        pan: formData['pan'],
        mobileNumber: formData['mobileNumber'],
        balance: 0,
      };

      createUserWithEmailAndPassword(auth, userDetails.email, userDetails.password)
        .then((response) => {
          console.log(response);
          this.http.post('https://localhost:7287/api/NetBank', userDetails).subscribe(
            (res) => {
              this._snackBar.open("Registration Successful. You can log in now.", 'Close', {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
              });
            },
            (error) => {
              console.error(error);
              this._snackBar.open("An error occurred. Please try again.", 'Close', {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
              });
            }
          );
        })
        .catch(error => {
          console.log(error);
          this._snackBar.open("An error occurred during registration. Please try again.", 'Close', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        });
    } else {
      this._snackBar.open("Check Details Again", 'Close', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      console.log('Form is invalid. Please check your inputs.');
      this.markAllAsTouched();
    }
  }

  login() {
    this.router.navigate(['/loginUser']);
  }

  private markAllAsTouched() {
    Object.keys(this.registerForm.controls).forEach(controlName => {
      this.registerForm.controls[controlName].markAsTouched();
    });
  }
}
