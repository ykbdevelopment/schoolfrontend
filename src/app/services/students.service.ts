import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from '../common/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrlBase + 'student/';
  } 

  getStudents(){
    return this.httpClient.get<Student[]>(this.apiUrl + 'getStudents');
  }
}
