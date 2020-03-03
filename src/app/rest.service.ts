import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


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


@Injectable()
export class RestService {
  localUrl = 'https://frontiercodingtests.azurewebsites.net/api/accounts/getall';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]>  {
    let temp = this.http.get<Customer[]>(this.localUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
    return temp; 
  }


  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

  
  
}
