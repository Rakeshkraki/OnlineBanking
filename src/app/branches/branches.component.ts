import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.css'
})
export class BranchesComponent {

  apiUrl = 'https://localhost:7287/api/Branch';

  branches: any[] = [];


  fetchBranches(): void {
    this.http.get<any[]>(this.apiUrl)
      .subscribe(
        data => {
          this.branches = data;
        },
        error => {
          console.error('Error fetching sent transactions:', error);
        }
      );
  }



  registerForms!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.registerForms = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', [Validators.required,]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      code: ['', [Validators.required, Validators.minLength(6)]],
      terms: [false, Validators.requiredTrue]
    });

    this.fetchBranches();
  }

  submitForm() {
    if (this.registerForms.valid) {
      const formData = this.registerForms.value;
      const branchDetails = {
        branchName: formData['name'],
        branchCode: formData['code'],
        branchAddress: formData['address'],
        phone: formData['mobileNumber']
      };


      this.http.post(`https://localhost:7287/api/Branch`, branchDetails).subscribe(
        res => {
          this._snackBar.open("Branch Added Successful ", 'Close', {
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
    } else {
      this.markAllAsTouched();
      this._snackBar.open("Check Details Again", 'Close', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    }

    this.ngOnInit();
  }


  private markAllAsTouched() {
    Object.keys(this.registerForms.controls).forEach(controlName => {
      this.registerForms.controls[controlName].markAsTouched();
    });
  }


}
