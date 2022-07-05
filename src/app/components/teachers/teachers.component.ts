import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/common/teacher';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  teacherList: Teacher[];

  constructor(private teacherService: TeachersService) { }

  ngOnInit(): void {
    this.teacherList = [];
    this.getTeachers();
  }

  getTeachers(){
    this.teacherService.getTeachers().subscribe(
      data => {
        this.teacherList = data;
      }, error => {
        console.error(error);
      }
    );
  }

}
