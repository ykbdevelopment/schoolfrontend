import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'src/app/common/subject';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  
  @Input()
  idTeacher: number;
  subjectList: Subject[];

  constructor(private subjectService: SubjectsService) { }

  ngOnInit(): void {
    this.subjectList = [];
    this.getSubjectsbyTeacher();
  }

  getSubjectsbyTeacher(){
    this.subjectService.getSubjectsbyTeacher(this.idTeacher).subscribe(
      data => {
        this.subjectList = data;
      }, error => {
        console.error(error);
      }
    );
  }

}



