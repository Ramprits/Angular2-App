import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/customer/customer';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'yo-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer = new Customer();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: '',
      notification: 'email',
      sendCatalog: false
    });
  }
  populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'Lulie',
      lastName: 'lerman',
      email: 'Rampritsahani@outlook.in',
      sendCatalog: true
    })
  }

  save(): void {
    console.log(this.customerForm);
    console.log('saved:' + JSON.stringify(this.customerForm.value));
  }

  setNotification(notifyVia: string): void {
    const phoneControl = this.customerForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    }
    // tslint:disable-next-line:one-line
    else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }
}
