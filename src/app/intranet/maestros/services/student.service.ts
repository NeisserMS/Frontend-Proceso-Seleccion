import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environments';
import { PATHS } from 'src/app/path.model';
import { StudentModel } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  apiUrl = environment.apiUrl;

  constructor(private htpp: HttpClient) {}

  getAll(): Observable<StudentModel[]> {
    return this.htpp.get<StudentModel[]>(
      `${this.apiUrl}${PATHS.Intranet.Student}`
    );
  }

  create(student: StudentModel): Observable<StudentModel> {
    return this.htpp.post<StudentModel>(
      `${this.apiUrl}${PATHS.Intranet.Student}`,
      student
    );
  }

  update(student: StudentModel): Observable<StudentModel> {
    return this.htpp.put<StudentModel>(
      `${this.apiUrl}${PATHS.Intranet.Student}/${student.id}`,
      student
    );
  }

  delete(id: number): Observable<StudentModel> {
    return this.htpp.delete<StudentModel>(
      `${this.apiUrl}${PATHS.Intranet.Student}/${id}`
    );
  }
}
