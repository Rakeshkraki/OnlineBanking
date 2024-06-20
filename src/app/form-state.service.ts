import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormStateService {
  personalDetailsForm: FormGroup;
  contactDetailsForm: FormGroup;
  proofOfIdentityForm: FormGroup;
  addressDetailsForm: FormGroup;
  declarationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.personalDetailsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      nameOf: ['', Validators.required],
      nationality: ['', Validators.required],
      otherNationality: [''],
      occupation: ['', Validators.required],
      annualIncome: ['', [Validators.required, Validators.min(0)]],
      religion: ['', Validators.required],
      category: ['', Validators.required],
      pwd: ['', Validators.required],
      qualification: ['', Validators.required],
      pan: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });

    this.contactDetailsForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.proofOfIdentityForm = this.fb.group({
      aadhar: ['', Validators.required],
      voterId: ['', Validators.required],
      license: ['', Validators.required],
      passport: ['', Validators.required]
    });

    this.addressDetailsForm = this.fb.group({
      addressType: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      pin: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      countryName: ['', Validators.required]
    });

    this.declarationForm = this.fb.group({
      photo: [null, Validators.required],
      place: ['', Validators.required],
      date: ['', Validators.required],
      signature: ['', Validators.required]
    });
  }
}
