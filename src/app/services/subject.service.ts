import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '../models/subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}

  addSubject(subject: Subject): Observable<any> {
    const url = 'http://localhost:8091/subject/add-subject';
    return this.http.post(url, subject);
  }

  getAllSubject(): Observable<any> {
    const url = 'http://localhost:8091/subject/get-all-subjects';
    return this.http.get(url);
  }


  getSubjectById(id:number):Observable<any>{
    const url='http://localhost:8091/subject/get-subject-by-id';
    return this.http.get(`${url}/${id}`);
  }

  updateSubject(subject: Subject): Observable<any> {
    const url = 'http://localhost:8091/subject/update-subject';
    return this.http.put(url, subject);
  }

  deleteSubject(id:number):Observable<any>{
    const url = `http://localhost:8091/subject/delete-subject/${id}`;
    return this.http.delete(url,{responseType:'text' as 'json'});
  }

}
