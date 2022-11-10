import { Component, OnInit } from '@angular/core';
import {Student} from "../../models/student.model";
import {map} from "rxjs/operators";
import {StudentService} from "../../services/student.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  studentList: Student[] =[];

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  private fetchProducts()
  {
     this.studentService.getAll().subscribe((data=>{
       this.studentList = data;
       console.log(this.studentList)
     }),(error=>{
       console.log(error)
     }));
  }

}
