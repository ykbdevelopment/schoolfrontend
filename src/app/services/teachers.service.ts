import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Teacher } from '../common/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrlBase + 'teacher/';
  } 

  getTeachers(){
    return this.httpClient.get<Teacher[]>(this.apiUrl + 'getTeachers');
  }

  getTeacherById(id: number){
    return this.httpClient.get<Teacher[]>(this.apiUrl + 'getTeacherById/' + id);
  }
}
