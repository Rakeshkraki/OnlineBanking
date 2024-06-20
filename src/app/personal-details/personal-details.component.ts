import { Component } from '@angular/core';
import { FormStateService } from '../form-state.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateAccountService } from '../create-account.service';
import { HttpClient } from '@angular/common/http';
import { state } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.css'
})
export class PersonalDetailsComponent {
  registerForm!: FormGroup;



  constructor(
    private http: HttpClient,
    public formState: FormStateService,
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: CreateAccountService,
    private _snackBar: MatSnackBar,
  ) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      pan: ['', Validators.required],
      dobDay: ['', Validators.required],
      dobMonth: ['', Validators.required],
      dobYear: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      occupationType: ['', Validators.required],
      annualIncome: ['', Validators.required],
      educationalQualification: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      aadhar: ['', Validators.required],
      voterId: ['', Validators.required],
      drivingLicense: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      pin: ['', Validators.required],
      countryName: ['', Validators.required],
      place: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
      branch: ['', Validators.required],
    });
  }


  submitForm() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      const userDetails = {
        userDetailsId: 0,
        firstName: formData['firstName'],
        lastName: formData['lastName'],
        dateOfBirth: `${formData['dobYear']}-${formData['dobMonth']}-${formData['dobDay']}`,
        gender: formData['gender'],
        nationality: formData['nationality'],
        occupationType: formData['occupationType'],
        annualIncome: parseFloat(formData['annualIncome']),
        educationalQualification: formData['educationalQualification'],
        pan: formData['pan'],
        mobileNumber: formData['mobileNumber'],
        emailAddress: formData['email'],
        aadhar: formData['aadhar'],
        voterId: formData['voterId'],
        drivingLicense: formData['drivingLicense'],
        address: formData['address'],
        city: formData['city'],
        district: formData['district'],
        state: formData['state'],
        pin: formData['pin'],
        countryName: formData['countryName'],
        photo: "base64encodedphotostring",
        place: formData['place'],
        declarationDate: this.getCurrentDate(),
        selectedBranch: formData['branch'],
        signature: "base64encodedsignaturestring"
      };

      this.http.post(`https://localhost:7287/api/CreateAccount`, userDetails).subscribe(response => {
        console.log('Form submitted successfully', response);

        this._snackBar.open(" Account Created Successful", 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.http.get(`https://localhost:7287/api/GeneratedValues/Pan?pan=${formData.pan}`).subscribe((res) => {
          this.router.navigate(['/genDetails'], { state: { res } })
        }

        )
      }, error => {
        console.error('Error submitting form', error);
      });
    } else {
      console.log('Form is invalid. Please check your inputs.');
    }
  }

  getCurrentDate(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

}
