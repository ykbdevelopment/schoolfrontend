import { Component, Input, OnInit } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  @Input()
  idSubject: number;

  students: string[];

  constructor(private subjectService: SubjectsService) { }

  ngOnInit(): void {
    this.getStudentsBySubjectJPA(this.idSubject);  
  }

  getStudentsBySubjectJPA(idSubject: number){
    this.subjectService.getStudentsBySubjectJPA(idSubject).subscribe(
      data => {
        this.students = data;
      }, error => {
        console.error(error);
      }
    );
  }

}
