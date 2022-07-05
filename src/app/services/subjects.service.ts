import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from '../common/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrlBase + 'subject/';
  } 

  getSubjects(id: number){
    return this.httpClient.get<Subject[]>(this.apiUrl + 'getSubjetcsbyId'+ id);
  }

  getStudentsBySubjectJPA(id: number){
    return this.httpClient.get<string[]>(this.apiUrl + 'getStudentsBySubjectJPA/'+ id);
  }

  getSubjectsbyTeacher(id: number){
    return this.httpClient.get<Subject[]>(this.apiUrl + 'getSubjectsbyTeacher/'+ id);
  }
}
