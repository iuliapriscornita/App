import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";



import {Observable} from "rxjs";

import {StudentModel} from "./student.model";
import {map} from 'rxjs/operators';


@Injectable()
export class StudentService {
  private studentsUrl = 'http://localhost:8080/api/students';

  constructor(private httpClient: HttpClient) {
  }

  getStudents(): Observable<StudentModel[]> {
    return this.httpClient
      .get<Array<StudentModel>>(this.studentsUrl);
  }
  getStudent(id: number): Observable<StudentModel> {
    return this.getStudents().pipe(map(students => students.find(student => student.Id === id)));
  }
  update(student): Observable<StudentModel> {
    const url = `${this.studentsUrl}/${student.id}`;
    return this.httpClient
      .put<StudentModel>(url, student);
  }
}

