import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  registerForms!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.registerForms = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terms: [false, Validators.requiredTrue]
    });
  }

  submitForm() {
    if (this.registerForms.valid) {
      const formData = this.registerForms.value;
      const adminDetails = {
        adminName: formData['name'],
        adminEmail: formData['email'],
        adminPassword: formData['password'],
        adminPhone: formData['mobileNumber']
      };

      createUserWithEmailAndPassword(auth, adminDetails.adminEmail, adminDetails.adminPassword)
        .then(response => {
          console.log(response);
          this.http.post(`https://localhost:7287/api/Admin`, adminDetails).subscribe(
            res => {
              this._snackBar.open("Registration Successful. You can log in now.", 'Close', {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'top'
              });
            },
            error => {
              console.error(error);
              this._snackBar.open("An error occurred. Please try again.", 'Close', {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'top'
              });
            }
          );
        })
        .catch(error => {
          console.log(error);
          this._snackBar.open("An error occurred during Authentication. Please try again.", 'Close', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
        });
    } else {
      this.markAllAsTouched();
      this._snackBar.open("Check Details Again", 'Close', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    }
  }

  login() {
    this.router.navigate(['/admin']);
  }

  private markAllAsTouched() {
    Object.keys(this.registerForms.controls).forEach(controlName => {
      this.registerForms.controls[controlName].markAsTouched();
    });
  }
}
