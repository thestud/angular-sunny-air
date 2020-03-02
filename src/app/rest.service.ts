import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Customer {
  Id: number;
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  AmountDue: number;
  PaymentDueDate: string;
  AccountStatusId: number;
}


@Injectable({
  providedIn: 'root'
})
export class RestService {
  localUrl = 'https://frontiercodingtests.azurewebsites.net/api/accounts/getall';

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get<Customer>(this.localUrl);
  }
  
}
