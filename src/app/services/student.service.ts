import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../config/constants";
import {Student} from "../models/student.model";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<Student[]>(`${Constants.API_ENDPOINT}/students`);
  }
}
