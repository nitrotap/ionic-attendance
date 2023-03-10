import { Component, OnInit } from '@angular/core';
import { Student, StudentsService } from '../../students.service';


@Component({
  selector: 'app-roster',
  templateUrl: './roster.page.html',
  styleUrls: ['./roster.page.scss'],
})
export class RosterPage implements OnInit {
  students: Student[] = [];

  constructor(
    private studentsService: StudentsService
  ) 
  { }

  ngOnInit() {
    
      this.students = this.studentsService.getAll();
    
  }

}
