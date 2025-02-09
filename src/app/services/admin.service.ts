import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any[]> {
    const url = 'http://localhost:8091/user/get-all-user';
    return this.http.get<any[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getAllAdmins(): Observable<any[]> {
    const url = 'http://localhost:8091/user/get-all-admin';
    return this.http.get<any[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getAllFaculties(): Observable<any[]> {
    const url = 'http://localhost:8091/user/get-all-faculty';
    return this.http.get<any[]>(url).pipe(
      catchError(this.handleError)
    );
  }



  addUser(user: User): Observable<any> {
    console.log('in service : ', user);

    const postUrl = 'http://localhost:8091/user/register-user';
    return this.http.post<User>(postUrl, user,{responseType: 'text' as 'json'}).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
      console.log("client side error");

    } else {
      console.log("client side error");

      // Server-side error
      if (error.status === 0) {
        console.log("client side error  0");

        // Network error
        errorMessage = 'Cannot connect to the server. Please try again later.';
      } else {
        console.log("client side error 500");

        errorMessage = `Server-side error: ${error.status} - ${error.message}`;
      }
    }
    return throwError(errorMessage);
  }

}
