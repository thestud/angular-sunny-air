import { Component, OnInit } from '@angular/core';
import {RestService, Customer} from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sunny-air';
  error: any;
  customers: Customer;  

  constructor(private restService: RestService) {}

  ngOnInit() {
    this.showCustomers();
  }

  showCustomers() {
    this.restService.getCustomers()
      .subscribe(
        (data: Customer) => this.customers = { ...data }, // success path
        error => this.error = error // error path
      );
  }

}
