import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacultyService {
  constructor(private http: HttpClient) {}

  getAllFaculty():Observable<any>{
    const url='http://localhost:8091/faculty/get-all-faculties';
    return this.http.get(url);

  }

}
