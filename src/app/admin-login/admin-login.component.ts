import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {


  adminForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private http: HttpClient) { }

  ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm() {
    if (this.adminForm.valid) {
      const email = this.adminForm.get('email')?.value;
      const password = this.adminForm.get('password')?.value;

      this.http.get<any[]>(`https://localhost:7287/api/Admin/emailpass?email=${email}&password=${password}`)
        .subscribe(
          data => {

            this._snackBar.open("login Successful", 'Close', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });

            this.router.navigate(['/adminHome'], { state: { data } })
            //this.router.navigate(['/adminSide'], { state: { data } })

          },
          error => {
            console.error('Error fetching sent transactions:', error);
            console.log('Invalid credentials');
            this._snackBar.open("Login failed", 'Close', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
          }
        );
    } else {
      console.log('Form is invalid. Please check your inputs.');
      this.markAllAsTouched();
    }
  }

  login() {
    console.log('Redirect to login');
  }

  private markAllAsTouched() {
    Object.keys(this.adminForm.controls).forEach(controlName => {
      this.adminForm.controls[controlName].markAsTouched();
    });
  }

}
