import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/customer/customer';

@Component({
  selector: 'yo-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customer: Customer = new Customer();
  constructor() { }
  // tslint:disable-next-line:member-ordering
  title = 'Hello World!';

  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }
  ngOnInit() {
  }

}
